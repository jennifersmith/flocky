(ns cljs.flocky
  (:require [cljs.core.async :as async
             :refer [<! >! chan timeout alts!]])
  (:require-macros [cljs.core.async.macros :refer [go]]))

(def size 100)
;; basically timeout between drawing frames

(def anim-delay 1000)

(defn rand-ints [n] (repeatedly #(rand-int n)))

(defn rand-bird [id]
  {:id id :x (rand-int size) :y (rand-int size) :r 1})


(defn lots-of-birds []
  (map rand-bird (range)))

(js/console.log "Hai6")

(defn init-world! []
  (js/initWorld size))


(defn update-world! [birds]
  (js/drawBirds  (clj->js (map clj->js birds))))

;; basically absuing core async for a draw loop
(defn draw-loop! []
  (init-world!)
  (go (loop []
        (<! (timeout anim-delay))
        (update-world! (take 20 (lots-of-birds))) 
        (recur))))

;; do stuff

(.ready (js/jQuery js/document)
       (fn []
         (draw-loop!)
         (js/console.log "here")))
