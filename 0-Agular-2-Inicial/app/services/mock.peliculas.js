System.register(["../model/Pelicula"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Pelicula_1;
    var PELICULAS;
    return {
        setters:[
            function (Pelicula_1_1) {
                Pelicula_1 = Pelicula_1_1;
            }],
        execute: function() {
            exports_1("PELICULAS", PELICULAS = [
                new Pelicula_1.Pelicula(1, "Batman vs Superman", "Zack Snider", 2016),
                new Pelicula_1.Pelicula(2, "La verdad duele", "Will Smith", 2016),
                new Pelicula_1.Pelicula(3, "El señor de los anillos", "Peter Jackson", 2004),
                new Pelicula_1.Pelicula(4, "Una historia real", "Rupert Goold", 2015),
                new Pelicula_1.Pelicula(5, "Don Jon", "Josep Gordon Levit", 2004),
                new Pelicula_1.Pelicula(6, "Dos tontos muy tontos", "Peter Farrelly, Bobby Farrelly", 2001)
            ]);
        }
    }
});
//# sourceMappingURL=mock.peliculas.js.map