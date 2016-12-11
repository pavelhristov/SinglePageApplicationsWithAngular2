"use strict";
var PowerType_1 = require("../utils/PowerType");
var Power = (function () {
    /**
     *
     */
    function Power(name, power, type, use) {
        this.name = name;
        this.power = power;
        this.type = type;
        this.use = use;
    }
    Power.prototype.activate = function (user, target) {
        if (target && this.use === PowerType_1.PowerUse.Destructive) {
            if (user.alignment === target.alignment) {
                console.log(this.name + " can not be used on target with same alignment!");
            }
            else {
                if (this.type === PowerType_1.PowerType.buff) {
                    target.decreaseDamage(this.power);
                }
                if (this.type === PowerType_1.PowerType.damage) {
                    target.takeDamage(user, this.power);
                }
            }
        }
        if (this.use === PowerType_1.PowerUse.Helpful) {
            if (this.type === PowerType_1.PowerType.buff) {
                user.increaseDamage(this.power);
            }
            if (this.type === PowerType_1.PowerType.damage) {
                user.getHealed(this.power);
            }
        }
    };
    return Power;
}());
exports.Power = Power;
//# sourceMappingURL=Power.js.map