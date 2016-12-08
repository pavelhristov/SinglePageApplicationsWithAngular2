"use strict";
var Creature = (function () {
    /**
     *
     */
    function Creature(name, alignment, hitPoints) {
        this.name = name;
        this.hitPoints = hitPoints;
        this.alignment = alignment;
    }
    Creature.prototype.takeDamage = function (attacker, damage) {
        if (this.hasHitPointsLeft) {
            this.hitPoints -= damage;
            console.log(this.name + " suffers " + damage + " damage from " + attacker.name + ";");
        }
    };
    Creature.prototype.hasHitPointsLeft = function () {
        var isAlive = this.hitPoints > 0;
        if (!isAlive) {
            console.log(this.name + " is already dead!");
        }
        return isAlive;
    };
    Creature.prototype.getHealed = function (amount) {
        console.log(this.name + " was healed for " + amount + "!");
        this.hitPoints += amount;
    };
    return Creature;
}());
exports.Creature = Creature;
//# sourceMappingURL=Creature.js.map