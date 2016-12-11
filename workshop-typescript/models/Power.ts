import { PowerType, PowerUse } from "../utils/PowerType";
import { Creature } from "../abstract/Creature"
import { Supercreature } from "../abstract/Supercreature"

class Power {
    name: string;
    power: number;
    type: PowerType;
    use: PowerUse;

    /**
     *
     */
    constructor(name: string, power: number, type: PowerType, use: PowerUse) {
        this.name = name;
        this.power = power;
        this.type = type;
        this.use = use;
    }

    activate(user: Supercreature, target?: Supercreature) {
        if (target && this.use === PowerUse.Destructive) {
            if (user.alignment === target.alignment) {
                console.log(`${this.name} can not be used on target with same alignment!`);
            } else {
                if (this.type === PowerType.buff) {
                    target.decreaseDamage(this.power)
                }
                if (this.type === PowerType.damage) {
                    target.takeDamage(user, this.power);
                }
            }
        }
        if (this.use === PowerUse.Helpful) {
            if (this.type === PowerType.buff) {
                user.increaseDamage(this.power)
            }
            if (this.type === PowerType.damage) {
                user.getHealed(this.power);
            }
        }
    }
}

export { Power }