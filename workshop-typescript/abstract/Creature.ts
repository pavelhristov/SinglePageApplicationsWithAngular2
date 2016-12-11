import { IHitable } from "../contracts/IHitable";
import { ICanHit } from "../contracts/ICanHit";
import { Supercreature } from "./Supercreature";
import { AlignmentType } from "../utils/AlignmentType";

abstract class Creature {
    name: string;
    hitPoints: number;
    alignment: AlignmentType;

    /**
     *
     */
    constructor(name: string, alignment: AlignmentType, hitPoints: number) {
        this.name = name;
        this.hitPoints = hitPoints;
        this.alignment = alignment;
    }

    takeDamage(attacker: Supercreature, damage: number) {
        if (this.hasHitPointsLeft) {
            this.hitPoints -= damage;
            console.log(`${this.name} suffers ${damage} damage from ${attacker.name};`);
        }
    }

    hasHitPointsLeft(): boolean {
        let isAlive = this.hitPoints > 0;

        if (!isAlive) {
            console.log(`${this.name} is dead!`)
        }

        return isAlive;
    }

    getHealed(amount: number) {
        console.log(`${this.name} was healed for ${amount}!`);
        this.hitPoints += amount;
    }
}

export { Creature }