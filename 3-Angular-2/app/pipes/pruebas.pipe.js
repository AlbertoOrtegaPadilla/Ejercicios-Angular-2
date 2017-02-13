"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var PruebasPipe = (function () {
    function PruebasPipe() {
    }
    PruebasPipe.prototype.transform = function (value, por) {
        var valuev = parseInt(value);
        var porv = parseInt(por);
        var result = "la multiplicación:" + valuev + "x" + porv + " = " + (valuev * porv);
        return result;
    };
    return PruebasPipe;
}());
PruebasPipe = __decorate([
    core_1.Pipe({ name: "pruebas" })
], PruebasPipe);
exports.PruebasPipe = PruebasPipe;
//# sourceMappingURL=pruebas.pipe.js.map