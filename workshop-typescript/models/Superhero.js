"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Supercreature_1 = require("../abstract/Supercreature");
var Superhero = (function (_super) {
    __extends(Superhero, _super);
    /**
     *
     */
    function Superhero(name, alignment, hitPoints, damage, power) {
        var _this = _super.call(this, name, alignment, hitPoints, damage) || this;
        _this.power = power;
        return _this;
    }
    Superhero.prototype.useSuperPower = function (target) {
        this.power.activate(this, target);
    };
    return Superhero;
}(Supercreature_1.Supercreature));
exports.Superhero = Superhero;
//# sourceMappingURL=Superhero.js.map