import { IHitable } from "./IHitable"

interface ICanHit {
    damage: number;
    hit(target: IHitable);
}

export { ICanHit }