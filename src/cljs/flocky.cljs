(ns cljs.flocky
  (:require [cljs.core.async :as async
             :refer [<! >! chan timeout alts!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def size 1000)
(def nbirds 100)
;; basically timeout between drawing frames

(def anim-delay 25)
;; pix / ms
(def max-speed 0.1)
(def min-speed 0.05)
(def min-turn-percent 0.0005)
(def min-turn (* 2 Math/PI min-turn-percent))
(def vision 100)
(def min-separation 40)

(defn rand-ints [n] (repeatedly #(rand-int n)))

(defn starting-position []
  {
   :coords [(rand-int size) (rand-int size)]})

(defn rand-bird [id]
  {:delta (* anim-delay (+ min-speed (* max-speed (rand))))
   :heading (* (rand) Math/PI 2)
   :r 1  :id id})

(defn wrap-coord [n]
  (cond (>= n size) (- n size)
        (< n 0) (- size (* -1 n))
        :else n))

(def xy-components (juxt Math/sin Math/cos))

(defn update-position [{:keys [delta heading]} {:keys [coords] :as result}]
  (let [
        components (map #(* delta %) (xy-components heading))
        new-coords
        (->> coords
             (map + components)
             (map wrap-coord))]
    (assoc result :coords new-coords)))


 (def separation (memoize (fn [pos1 pos2]
                              (Math/sqrt
                               (apply +
                                      (map #(Math/pow % 2)
                                           (map -
                                                (:coords pos1)
                                                (:coords pos2))))))))

 (def separation (memoize (fn [pos1 pos2]
                            (let [[[x1 y1] [x2 y2]] (map :coords [pos1 pos2]) ])
                              (Math/sqrt
                               (+ (Math/pow (- x1 x2) 2)
                                  (Math/pow (- y1 y2) 2))))))

(defn all-differences [positions]
  (vec
   (for [pos1 positions]
     (vec
      (for [pos2 positions]
        (separation pos1 pos2))))))

(defn in-range? [x]
  (< x vision))


(defn dmap [f c]
  (map #(map f %) c))

;;(def separation (constantly 10000))
;; pieceofcrap

(defn get-neighbours [birds bird-positions]
  #_(take nbirds (repeat []))
  (for [bird bird-positions] 
    (for [other-bird bird-positions 
          :let [sep (separation bird other-bird)] 
          :when (< sep min-separation)]
      sep)))

;; segment the birds up according to zones that are multiples of the min sep. Even if we compare bird with birds in the 9 quadrants round him, still probably cheaper compare

(defn get-zones [birds bird-positions]
  (let [zone-size (* 2 min-separation)
        x-zone #(quot (first %) zone-size)
        y-zone #(quot (last %) zone-size)
        zone (juxt x-zone y-zone)]
    (map zone (map :coords bird-positions))))

(defn update-bird [bird neighbours zone]
  (let [turn-by (* min-turn )
        in-range (filter #(in-range? (second %)) neighbours)]
    (-> bird
        (assoc :col (count neighbours))
        (update-in [:heading] (partial + turn-by)))))

(defn init-world! []
  (js/initWorld size
                (clj->js
                 (take-while #(<= % size) (iterate #(+ % (* min-separation 2)) 0)))))

(defn update-world! [positions]
  (js/drawBirds
   (clj->js
    (map clj->js positions))))

;; basically absuing core async for a draw loop
(defn draw-loop! []
  (init-world!)
  (go (loop [the-birds (vec (map rand-bird (range nbirds)))
             positions (map starting-position the-birds)]
        (update-world! (map merge positions the-birds))
        (<! (timeout anim-delay))
        (recur (map update-bird the-birds
                    (get-neighbours the-birds positions)
                    (get-zones the-birds positions))
               (map update-position the-birds positions)))))

(defn non-draw-loop! [times]
  (time (let [
             the-birds (vec (map rand-bird (range nbirds)))
             positions (map starting-position the-birds)]
          (time 
           (dotimes [n times]
             (mapv update-bird the-birds
                   (get-neighbours the-birds positions)
                   (get-zones the-birds positions)))))))
;; do stuff
(set! *print-fn* (fn [& args] (js/console.log (clj->js (apply str args)))))

(.ready (js/jQuery js/document)
        (fn []
          (non-draw-loop! 100)))
