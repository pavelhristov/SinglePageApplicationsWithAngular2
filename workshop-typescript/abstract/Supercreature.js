"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Creature_1 = require("./Creature");
var Supercreature = (function (_super) {
    __extends(Supercreature, _super);
    /**
     *
     */
    function Supercreature(name, alignment, hitPoints, damage) {
        var _this = _super.call(this, name, alignment, hitPoints) || this;
        _this.damage = damage;
        return _this;
    }
    Supercreature.prototype.hit = function (target) {
        target.takeDamage(this, this.damage);
    };
    Supercreature.prototype.increaseDamage = function (amount) {
        this.damage += amount;
    };
    Supercreature.prototype.decreaseDamage = function (amount) {
        this.damage -= amount;
        if (this.damage < 0) {
            this.damage = 0;
        }
    };
    return Supercreature;
}(Creature_1.Creature));
exports.Supercreature = Supercreature;
//# sourceMappingURL=Supercreature.js.map