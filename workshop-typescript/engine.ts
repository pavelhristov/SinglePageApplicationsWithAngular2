/* globals require, process Promise */

// TODO: SEPARATE IN MODULES ONCE IT WORKS!!!!!!!!!!!!!!!!
// console read setup
import { Superhero } from "./models/Superhero";
import { AlignmentType } from "./utils/AlignmentType"
import { Power } from "./models/Power"
import { PowerType, PowerUse } from "./utils/PowerType";

const endOfLine = require('os').EOL;
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});



let utilityBelt = new Power("Utility Belt", 10, PowerType.buff, PowerUse.Helpful);
let laserBeam = new Power("Laser beam", 100, PowerType.damage, PowerUse.Destructive);
let batman = new Superhero("Batman", AlignmentType.good, 500, 50, utilityBelt);
let superman = new Superhero("Supermen", AlignmentType.good, 1000, 100, laserBeam);
let ironman = new Superhero("Iron man", AlignmentType.good, 750, 75, laserBeam);

let killingJoke = new Power("Killing Joke", 200, PowerType.damage, PowerUse.Destructive);
let joker = new Superhero("Joker", AlignmentType.evil, 400, 30, killingJoke);



class Engine {
    private readonly EXIT_COMMAND: string = "exit";
    private readonly CHOICE_COMMAND: string = "choice";
    private readonly ATTACK_COMMAND: string = "attack";
    private readonly POWER_COMMAND: string = "power";

    private playerCharacter: Superhero;
    private enemy: Superhero;


    // TODO: do not couple with arrays, use the friendly mongoose and move them out of the class!
    private superheroes = [
        batman,
        ironman,
        superman
    ];

    private supervillains = [
        joker
    ];

    private waitForCommand(message?: string) {
        message = message || " ";
        rl.question(`->${message} :`, (answer) => {
            let command = answer.split(" ");

            if (command[0] === this.EXIT_COMMAND) {
                console.log("Thanks for playing!")
                rl.close();
            } else if (command[0] === this.CHOICE_COMMAND) {
                console.log(`${command[1]} ${command[2]}`);
                this.waitForCommand();
            } else if (command[0] === this.ATTACK_COMMAND) {
                console.log("Attack!");
                this.waitForCommand();
            } else if (command[0] === this.POWER_COMMAND) {
                console.log("Use power!");
                this.waitForCommand();
            } else {
                console.log("Invalid command!");
                this.waitForCommand();
            }
        });
    }

    private getSuperhero() {
        return new Promise((resolve, reject) => {
            let characters = this.superheroes.map(sh => sh.name).join(", ")
            let result: Superhero;
            rl.question(`Choice your character: ${characters}${endOfLine}`, answer => {
                if (characters.indexOf(answer) > -1) {
                    let superhero = this.superheroes.filter(x => x.name === answer);
                    resolve(superhero[0]);
                } else {
                    console.log("There is no such a superhero!")
                    this.getSuperhero()
                        .then(sh => resolve(sh))
                        .catch(err => reject(err));
                }
            });
        })
    }

    private getSupervillain() {
        return new Promise((resolve, reject) => {
            let characters = this.supervillains.map(sh => sh.name).join(", ")
            let result: Superhero;
            rl.question(`${characters}${endOfLine}`, answer => {
                if (characters.indexOf(answer) > -1) {
                    let supervillain = this.supervillains.filter(x => x.name === answer);
                    resolve(supervillain[0]);
                } else {
                    console.log("There is no such a supervillain!")
                    this.getSupervillain()
                        .then(sh => resolve(sh))
                        .catch(err => reject(err));
                }
            });
        })
    }

    private choiceCharacter() {
        rl.question(`Do you want to be a superhero or a supervillain?${endOfLine}`, answer => {
            let command = answer;
            if (command === "superhero") {
            console.log("Choice your character:");
                this.getSuperhero()
                    .then(superhero => {
                        this.playerCharacter = superhero;
                        console.log(this.playerCharacter);
                        console.log("Closing reading!")
                        rl.close();
                    }).then(() => {
                        console.log("Choice your enemy:");
                        return this.getSupervillain();
                    }).then((supervillain) => {
                        this.enemy = supervillain;
                    }).catch(err => {
                        console.log("Error!")
                        console.log(err)
                        rl.close();
                    });
            } else if (command === "supervillain") {
                this.getSupervillain()
                    .then(supervillain => {
                        this.playerCharacter = supervillain;
                        console.log(this.playerCharacter);
                        console.log("Closing reading!")
                        rl.close();
                    }).then(() => {
                        console.log("Choice your enemy:");
                        return this.getSuperhero();
                    }).then((superhero) => {
                        this.enemy = superhero;
                    }).catch(err => {
                        console.log("Error!")
                        console.log(err)
                        rl.close();
                    });
            } else {
                console.log("Incorrect fraction!");
                this.choiceCharacter();
            }
        })
    }

    public start() {
        this.choiceCharacter();
        //this.waitForCommand("Choice character!");
    }
}

export { Engine }