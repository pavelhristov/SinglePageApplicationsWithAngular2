import { IHitable } from "../contracts/IHitable"
import { ICanHit } from "../contracts/ICanHit"
import { Supercreature } from "../abstract/Supercreature"
import { Power } from "./Power";
import { AlignmentType } from "../utils/AlignmentType"

class Superhero extends Supercreature {

    power: Power;
    /**
     *
     */
    constructor(name: string, alignment: AlignmentType, hitPoints: number, damage: number, power: Power) {
        super(name, alignment, hitPoints, damage);
        this.power = power;
    }

    useSuperPower(target?: Supercreature){
        this.power.activate(this,target);
    }
}

export { Superhero }