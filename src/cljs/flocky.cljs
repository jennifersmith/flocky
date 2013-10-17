(ns cljs.flocky)

(def size 100)
(defn rand-ints [n] (repeatedly #(rand-int n)))

(defn rand-bird [id]
  {:id id :x (rand-int size) :y (rand-int size) :r 1})


(defn lots-of-birds []
  (map rand-bird (range)))
(js/console.log "Hai")


