System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Pelicula;
    return {
        setters:[],
        execute: function() {
            Pelicula = (function () {
                function Pelicula(id, titulo, director, emision) {
                    this.id = id;
                    this.titulo = titulo;
                    this.director = director;
                    this.emision = emision;
                }
                return Pelicula;
            }());
            exports_1("Pelicula", Pelicula);
        }
    }
});
//# sourceMappingURL=pelicula.js.map