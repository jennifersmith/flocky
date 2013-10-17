(ns cljs.flocky
  (:require [cljs.core.async :as async
             :refer [<! >! chan timeout alts!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def size 1000)
(def nbirds 20)
;; basically timeout between drawing frames

(def anim-delay 50)
;; pix / ms
(def speed 0.01)

(def delta (* speed anim-delay))

(defn rand-ints [n] (repeatedly #(rand-int n)))

(defn rand-bird [id]
  {:x (rand-int size) :y (rand-int size) :r 1 :heading 0 :id id})

(defn wrap-coord [n]
  (cond (> n size) (- n size)
        (< n 0) (- n size)
        :else n))

(defn update-position [{:keys [x y] :as result}]
  (let [[x y] (map (comp #(+ % delta) wrap-coord) [x y])]
    (merge result {:x x :y y})))

(defn inc-bird [bird]
  (-> bird
      (update-position)))

(defn init-world! []
  (js/initWorld size))

(defn update-world! [birds]
  (js/drawBirds
   (clj->js
    (map clj->js birds))))

;; basically absuing core async for a draw loop
(defn draw-loop! []
  (init-world!)
  (go (loop [the-birds (vec (map rand-bird (range nbirds)))]
        (update-world! the-birds)
        (<! (timeout anim-delay))
        (recur (map inc-bird the-birds)))))

;; do stuff

(.ready (js/jQuery js/document)
       (fn []
         (draw-loop!)))
