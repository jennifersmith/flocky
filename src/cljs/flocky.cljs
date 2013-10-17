(ns cljs.flocky
  (:require [cljs.core.async :as async
             :refer [<! >! chan timeout alts!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def size 1000)
(def nbirds 50)
;; basically timeout between drawing frames

(def anim-delay 50)
;; pix / ms
(def max-speed 0.1)
(def min-speed 0.05)
(def min-turn-percent 0.0005)
(def min-turn (* 2 Math/PI min-turn-percent))

(defn rand-ints [n] (repeatedly #(rand-int n)))

(defn starting-position []
  {:heading (* (rand) Math/PI 2)
   :coords [(rand-int size) (rand-int size)]})

(defn rand-bird [id]
  {:delta (* anim-delay (+ min-speed (* max-speed (rand))))
   :heading (* (rand) Math/PI 2)
   :r 1  :id id})

(defn wrap-coord [n]
  (cond (> n size) (- n size)
        (< n 0) (- n size)
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

(defn update-bird [bird]
  (let [ turn-by (* min-turn (rand))
        ]
    (update-in bird [:heading] (partial + turn-by))))

(defn init-world! []
  (js/initWorld size))

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
        (recur (map update-bird the-birds) (map update-position the-birds positions)))))

;; do stuff

(.ready (js/jQuery js/document)
       (fn []
         (draw-loop!)))
