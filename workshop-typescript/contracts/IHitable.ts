import { IThing } from "./IThing";
import { ICanHit } from "./ICanHit";

interface IHitable {
    takeDamage(attacker: ICanHit, damage: number)
}

export { IHitable }