(ns flocky)

(def size 1000)
(def nb-birds 20)
(def vision-radius 50)


 (defn separation [pos1 pos2]
   (Math/sqrt
    (apply +
           (map #(Math/pow % 2)
                (map -
                     (:coords pos1)
                     (:coords pos2))))))
(defn starting-position [] 
  {:coords [(rand-int size) 
            (rand-int size)]})


(defn find-zone [coords]
  (let [zone-size (* 2 vision-radius)
        x-zone #(quot (first %) zone-size)
        y-zone #(quot (last %) zone-size)
        zone (juxt x-zone y-zone)]
    (zone coords)))


(defn with-zone [position]
  (assoc position :zone (find-zone (:coords position))))

(defn get-surroundings [[x y]]
  (let [fs [inc dec identity]]
    (for [a fs b fs]
      [(a x) (b y)])))

(defn get-visible-neighbours-by-position [all-positions-by-zone position] 
  (let [neighbour-zones (get-surroundings (:zone position))
        zones (select-keys all-positions-by-zone neighbour-zones)
        ]
    (filter #(not= position %)
            (apply concat (vals zones)))))

(defn get-nearby-neighbours [positions]
  (let [pos-with-zone
        (->> positions
             (map with-zone))
        neigbours-by-position (map (partial get-visible-neighbours-by-position 
                      (group-by :zone pos-with-zone)) pos-with-zone)]))


