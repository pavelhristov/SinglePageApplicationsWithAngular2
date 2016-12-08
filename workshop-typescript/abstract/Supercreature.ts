import { Creature } from "./Creature"
import { ICanHit } from "../contracts/ICanHit"
import { AlignmentType } from "../utils/AlignmentType"

abstract class Supercreature extends Creature implements ICanHit {
    damage: number;
    /**
     *
     */
    constructor(name: string,alignment: AlignmentType, hitPoints: number, damage: number) {
        super(name,alignment, hitPoints);
        this.damage = damage;
    }

    hit(target: Creature) {
        target.takeDamage(this, this.damage);
    }

    increaseDamage(amount: number) {
        this.damage += amount;
    }

    decreaseDamage(amount: number) {
        this.damage -= amount;
        if (this.damage < 0) {
            this.damage = 0;
        }
    }
}

export { Supercreature }