(defproject flocky "0.1.0-SNAPSHOT"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/core.async "0.1.242.0-44b1e3-alpha"]
                 [org.clojure/clojurescript "0.0-1909"]
                 [compojure "1.1.5"]
                 [hiccup "1.0.3"]
                 [domina "1.0.2-SNAPSHOT"]
                 [com.cemerick/piggieback "0.1.0"]
                 ]
  :source-paths ["src/clj"]

  :plugins [[lein-cljsbuild "0.3.2"]
            [lein-ring "0.8.5"]]

  :ring {:handler flocky.handler/app}

  :cljsbuild {:builds {:dev
                       {:source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/dev.js"
                                   :optimizations :whitespace
                                   :pretty-print true}}

                       :prod
                       {:source-paths ["src/cljs"]
                        :compiler {:output-to "resources/public/js/prod.js"
                                   :optimizations :advanced}}}}
  :repl-options {:nrepl-middleware [cemerick.piggieback/wrap-cljs-repl]
                 :init (use 'flocky.repl)})
