(ns cljs.flocky
  (:require [cljs.core.async :as async
             :refer [<! >! chan timeout alts!]])
  (:require-macros [cljs.core.async.macros :refer [go]])  )


(def size 1000)
(def nbirds 40)
;; basically timeout between drawing frames

(def anim-delay 1)
;; pix / ms?
(def max-speed 30)
(def min-speed 10)
(def min-turn-percent 0.0005)
(def min-turn (* 2 Math/PI min-turn-percent))
(def vision 100)
(def min-separation 50)

(defn rand-ints [n] (repeatedly #(rand-int n)))

(defn starting-position []
  {
   :coords [(rand-int size) (rand-int size)]})

(defn rand-bird [id]
  {:delta (* anim-delay (+ min-speed (* max-speed (rand))))
   :heading (* (rand) Math/PI 2)
   :col 0
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

(def points-separation (fn [[x1 y1] [x2 y2]]
                         (Math/sqrt
                          (+ (Math/pow (- x1 x2) 2)
                             (Math/pow (- y1 y2) 2)))))

(def separation (fn [pos1 pos2] 
                  (points-separation (:coords pos1)  (:coords pos2))))

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
  (let [points (map :coords bird-positions)]
    (for [bird points] 
      (for [other-bird points
            :let [sep (points-separation bird other-bird)] 
            :when (< sep vision)
            ]
        sep))))

;; segment the birds up according to zones that are multiples of the min sep. Even if we compare bird with birds in the 9 quadrants round him, still probably cheaper compare

(defn get-zones [birds bird-positions]
  (let [zone-size (* 2 min-separation)
        x-zone #(quot (first %) zone-size)
        y-zone #(quot (last %) zone-size)
        zone (juxt x-zone y-zone)]
    (map zone (map :coords bird-positions))))


(defn get-zone-neighbours [birds bird-positions]
  (let [zones (get-zones birds bird-positions)
        birds-by-zone (group-by first (map vector zones birds)) ]))

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
(defn draw-loop! [draw-data-channel]
  (init-world!)
  (go (loop [birds {}]
        (update-world! (vals birds))
        (<! (timeout anim-delay))
        (let [bird (<! draw-data-channel)]
          (recur (assoc birds (:id bird) bird))))))


(defn updater-loop [draw-data-channel]
    (go (loop [the-birds (map rand-bird (range nbirds))
             positions (map starting-position the-birds)]
          (doseq [d (map merge positions the-birds)]
            (>! draw-data-channel d))
          (recur (map update-bird the-birds
                      (get-neighbours the-birds positions)
                      (get-zones the-birds positions))
                 (map update-position the-birds positions)))))

(defn neighbour-cals [times]
  (let [
        the-birds (vec (map rand-bird (range nbirds)))
        positions (map starting-position the-birds)]
    (time
     (dotimes [n times]
       (let [neib (get-neighbours [] positions)]
         (vec (flatten neib)))))))

(defn rand-seq []
  (repeatedly #(rand-int 1000)))

(defn sep-calcs [times]
  (time
   (dotimes [n (* nbirds nbirds times)]
     (points-separation [(rand-int 1000) (rand-int 1000)] [(rand-int 1000) (rand-int 1000)])
     #_(js/superFastSep (clj->js [(rand-int 1000) (rand-int 1000)]) (clj->js [(rand-int 1000) (rand-int 1000)])))))

(defn get-neighbours-profile [times]
  (let [bird-positions (map starting-position (map rand-bird (range nbirds)))]
    (time
     (dotimes [n times]
       (vec
        (flatten
         (for [bird bird-positions] 
           (for [other-bird bird-positions 
                 :let [sep (separation bird other-bird)] 
                 :when (< sep min-separation)
                 ]
             sep))))))))

(defn ^:export profile [times]
  (sep-calcs times))


;; do stuff
(set! *print-fn* (fn [& args] (js/console.log (clj->js (apply str args)))))

(.ready (js/jQuery js/document)
        (fn []
          (prn "I'm gonna draw stuff")
          (let [draw-data-channel (chan)]
            (updater-loop draw-data-channel)
            (draw-loop! draw-data-channel)
            )
          #_(dotimes [n 3]
            (profile 100))))
