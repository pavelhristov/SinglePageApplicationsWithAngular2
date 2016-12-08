import { Superhero } from "./models/Superhero";
import { AlignmentType } from "./utils/AlignmentType"
import {Power} from "./models/Power"
import { PowerType, PowerUse} from "./utils/PowerType";


let utilityBelt =  new Power("Utility Belt", 10,PowerType.buff, PowerUse.Helpful);
let laserBeam = new Power("Laser beam", 100, PowerType.damage, PowerUse.Destructive);
let batman = new Superhero("Batman", AlignmentType.good, 500, 50, utilityBelt);
let superman = new Superhero("Supermen", AlignmentType.evil, 1000, 100, laserBeam);

batman.hit(superman);
batman.useSuperPower();
console.log(batman.damage);
superman.useSuperPower(batman);
console.log(batman.hitPoints);
