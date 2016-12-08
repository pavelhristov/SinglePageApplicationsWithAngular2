"use strict";
var Superhero_1 = require("./models/Superhero");
var AlignmentType_1 = require("./utils/AlignmentType");
var Power_1 = require("./models/Power");
var PowerType_1 = require("./utils/PowerType");
var utilityBelt = new Power_1.Power("Utility Belt", 10, PowerType_1.PowerType.buff, PowerType_1.PowerUse.Helpful);
var laserBeam = new Power_1.Power("Laser beam", 100, PowerType_1.PowerType.damage, PowerType_1.PowerUse.Destructive);
var batman = new Superhero_1.Superhero("Batman", AlignmentType_1.AlignmentType.good, 500, 50, utilityBelt);
var superman = new Superhero_1.Superhero("Supermen", AlignmentType_1.AlignmentType.evil, 1000, 100, laserBeam);
batman.hit(superman);
batman.useSuperPower();
console.log(batman.damage);
superman.useSuperPower(batman);
console.log(batman.hitPoints);
//# sourceMappingURL=main.js.map