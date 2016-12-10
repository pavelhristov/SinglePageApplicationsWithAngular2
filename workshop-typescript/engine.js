/* globals require, process Promise */
"use strict";
// TODO: SEPARATE IN MODULES ONCE IT WORKS!!!!!!!!!!!!!!!!
// console read setup
var Superhero_1 = require("./models/Superhero");
var AlignmentType_1 = require("./utils/AlignmentType");
var Power_1 = require("./models/Power");
var PowerType_1 = require("./utils/PowerType");
var endOfLine = require('os').EOL;
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var utilityBelt = new Power_1.Power("Utility Belt", 10, PowerType_1.PowerType.buff, PowerType_1.PowerUse.Helpful);
var laserBeam = new Power_1.Power("Laser beam", 100, PowerType_1.PowerType.damage, PowerType_1.PowerUse.Destructive);
var batman = new Superhero_1.Superhero("Batman", AlignmentType_1.AlignmentType.good, 500, 50, utilityBelt);
var superman = new Superhero_1.Superhero("Supermen", AlignmentType_1.AlignmentType.good, 1000, 100, laserBeam);
var ironman = new Superhero_1.Superhero("Iron man", AlignmentType_1.AlignmentType.good, 750, 75, laserBeam);
var killingJoke = new Power_1.Power("Killing Joke", 200, PowerType_1.PowerType.damage, PowerType_1.PowerUse.Destructive);
var joker = new Superhero_1.Superhero("Joker", AlignmentType_1.AlignmentType.evil, 400, 30, killingJoke);
var Engine = (function () {
    function Engine() {
        this.EXIT_COMMAND = "exit";
        this.CHOICE_COMMAND = "choice";
        this.ATTACK_COMMAND = "attack";
        this.POWER_COMMAND = "power";
        // TODO: do not couple with arrays, use the friendly mongoose and move them out of the class!
        this.superheroes = [
            batman,
            ironman,
            superman
        ];
        this.supervillains = [
            joker
        ];
    }
    Engine.prototype.waitForCommand = function (message) {
        var _this = this;
        message = message || " ";
        rl.question("->" + message + " :", function (answer) {
            var command = answer.split(" ");
            if (command[0] === _this.EXIT_COMMAND) {
                console.log("Thanks for playing!");
                rl.close();
            }
            else if (command[0] === _this.CHOICE_COMMAND) {
                console.log(command[1] + " " + command[2]);
                _this.waitForCommand();
            }
            else if (command[0] === _this.ATTACK_COMMAND) {
                console.log("Attack!");
                _this.waitForCommand();
            }
            else if (command[0] === _this.POWER_COMMAND) {
                console.log("Use power!");
                _this.waitForCommand();
            }
            else {
                console.log("Invalid command!");
                _this.waitForCommand();
            }
        });
    };
    Engine.prototype.getSuperhero = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var characters = _this.superheroes.map(function (sh) { return sh.name; }).join(", ");
            var result;
            rl.question("Choice your character: " + characters + endOfLine, function (answer) {
                if (characters.indexOf(answer) > -1) {
                    var superhero = _this.superheroes.filter(function (x) { return x.name === answer; });
                    resolve(superhero[0]);
                }
                else {
                    console.log("There is no such a superhero!");
                    _this.getSuperhero()
                        .then(function (sh) { return resolve(sh); })["catch"](function (err) { return reject(err); });
                }
            });
        });
    };
    Engine.prototype.getSupervillain = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var characters = _this.supervillains.map(function (sh) { return sh.name; }).join(", ");
            var result;
            rl.question("" + characters + endOfLine, function (answer) {
                if (characters.indexOf(answer) > -1) {
                    var supervillain = _this.supervillains.filter(function (x) { return x.name === answer; });
                    resolve(supervillain[0]);
                }
                else {
                    console.log("There is no such a supervillain!");
                    _this.getSupervillain()
                        .then(function (sh) { return resolve(sh); })["catch"](function (err) { return reject(err); });
                }
            });
        });
    };
    Engine.prototype.choiceCharacter = function () {
        var _this = this;
        rl.question("Do you want to be a superhero or a supervillain?" + endOfLine, function (answer) {
            var command = answer;
            if (command === "superhero") {
                console.log("Choice your character:");
                _this.getSuperhero()
                    .then(function (superhero) {
                    _this.playerCharacter = superhero;
                    console.log(_this.playerCharacter);
                    console.log("Closing reading!");
                    rl.close();
                }).then(function () {
                    console.log("Choice your enemy:");
                    return _this.getSupervillain();
                }).then(function (supervillain) {
                    _this.enemy = supervillain;
                })["catch"](function (err) {
                    console.log("Error!");
                    console.log(err);
                    rl.close();
                });
            }
            else if (command === "supervillain") {
                _this.getSupervillain()
                    .then(function (supervillain) {
                    _this.playerCharacter = supervillain;
                    console.log(_this.playerCharacter);
                    console.log("Closing reading!");
                    rl.close();
                }).then(function () {
                    console.log("Choice your enemy:");
                    return _this.getSuperhero();
                }).then(function (superhero) {
                    _this.enemy = superhero;
                })["catch"](function (err) {
                    console.log("Error!");
                    console.log(err);
                    rl.close();
                });
            }
            else {
                console.log("Incorrect fraction!");
                _this.choiceCharacter();
            }
        });
    };
    Engine.prototype.start = function () {
        this.choiceCharacter();
        //this.waitForCommand("Choice character!");
    };
    return Engine;
}());
exports.Engine = Engine;
//# sourceMappingURL=engine.js.map