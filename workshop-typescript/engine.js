/* globals require, process, Promise */
"use strict";
// TODO: SEPARATE IN MODULES ONCE IT WORKS!!!!!!!!!!!!!!!!
var Superhero_1 = require("./models/Superhero");
var AlignmentType_1 = require("./utils/AlignmentType");
var Power_1 = require("./models/Power");
var PowerType_1 = require("./utils/PowerType");
var ts_promise_1 = require("ts-promise");
// console read setup
var endOfLine = require('os').EOL;
var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
var utilityBelt = new Power_1.Power("Utility Belt", 10, PowerType_1.PowerType.buff, PowerType_1.PowerUse.Helpful);
var laserBeam = new Power_1.Power("Laser beam", 100, PowerType_1.PowerType.damage, PowerType_1.PowerUse.Destructive);
var killingJoke = new Power_1.Power("Killing Joke", 200, PowerType_1.PowerType.damage, PowerType_1.PowerUse.Destructive);
var batman = new Superhero_1.Superhero("Batman", AlignmentType_1.AlignmentType.good, 500, 50, utilityBelt);
var superman = new Superhero_1.Superhero("Supermen", AlignmentType_1.AlignmentType.good, 1000, 100, laserBeam);
var ironman = new Superhero_1.Superhero("Iron man", AlignmentType_1.AlignmentType.good, 750, 75, laserBeam);
var joker = new Superhero_1.Superhero("Joker", AlignmentType_1.AlignmentType.evil, 400, 30, killingJoke);
var Engine = (function () {
    function Engine() {
        this.EXIT_COMMAND = "exit";
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
    Engine.prototype.terribleAI = function () {
        var action = Math.round(Math.random() * 10);
        if (action < 7) {
            this.enemy.hit(this.playerCharacter);
        }
        else if (action >= 7) {
            this.enemy.useSuperPower(this.playerCharacter);
        }
    };
    Engine.prototype.waitForCommand = function (message) {
        var _this = this;
        message = message || " ";
        if (!this.playerCharacter.hasHitPointsLeft()) {
            console.log("You Lose!");
            rl.close();
        }
        else if (!this.enemy.hasHitPointsLeft()) {
            console.log("You Win!");
            rl.close();
        }
        else {
            rl.question("->" + message + ": ", function (answer) {
                var command = answer.split(" ");
                if (command[0] === _this.EXIT_COMMAND) {
                    console.log("Thanks for playing!");
                    rl.close();
                }
                else if (command[0] === _this.ATTACK_COMMAND) {
                    console.log("Attack!");
                    _this.playerCharacter.hit(_this.enemy);
                    _this.terribleAI();
                    _this.waitForCommand();
                }
                else if (command[0] === _this.POWER_COMMAND) {
                    console.log("Use power!");
                    _this.playerCharacter.useSuperPower(_this.enemy);
                    _this.terribleAI();
                    _this.waitForCommand();
                }
                else {
                    console.log("Invalid command!");
                    _this.waitForCommand(message);
                }
            });
        }
    };
    Engine.prototype.getSuperhero = function () {
        var _this = this;
        return new ts_promise_1.Promise(function (resolve, reject) {
            var characters = _this.superheroes.map(function (sh) { return sh.name; }).join(", ");
            var result;
            rl.question("" + characters + endOfLine, function (answer) {
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
        return new ts_promise_1.Promise(function (resolve, reject) {
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
    // Pyramid of Death!!! 
    Engine.prototype.choiceCharacter = function () {
        var _this = this;
        return new ts_promise_1.Promise(function (resolve, reject) {
            rl.question("Do you want to be a superhero or a supervillain?" + endOfLine, function (answer) {
                var command = answer;
                if (command === "superhero") {
                    console.log("Choice your character:");
                    _this.getSuperhero()
                        .then(function (superhero) {
                        _this.playerCharacter = superhero;
                    }).then(function () {
                        console.log("Choice your enemy:");
                        return _this.getSupervillain();
                    }).then(function (supervillain) {
                        _this.enemy = supervillain;
                        resolve();
                    })["catch"](function (err) {
                        reject(err);
                    });
                }
                else if (command === "supervillain") {
                    _this.getSupervillain()
                        .then(function (supervillain) {
                        _this.playerCharacter = supervillain;
                    }).then(function () {
                        console.log("Choice your enemy:");
                        return _this.getSuperhero();
                    }).then(function (superhero) {
                        _this.enemy = superhero;
                        resolve();
                    })["catch"](function (err) {
                        reject(err);
                    });
                }
                else {
                    console.log("Incorrect fraction!");
                    _this.choiceCharacter();
                }
            });
        });
    };
    Engine.prototype.start = function () {
        var _this = this;
        this.choiceCharacter()
            .then(function () { return _this.waitForCommand("START!"); })["catch"](function (err) {
            console.log("Error: " + err);
            rl.close();
        });
    };
    return Engine;
}());
exports.Engine = Engine;
//# sourceMappingURL=engine.js.map