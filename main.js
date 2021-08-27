import Dice from "./dice.js";
import Player from "./player.js";

class Career{
    constructor() {
        this._dice = new Dice();
        this._p1 = new Player();
        this._p2 = new Player();
        this._start();
    }

    _start(){
        while (this._p1.getPosition() <= 100 && this._p2.getPosition() <= 100) {
            this._p1.move(this._dice.throw());
            console.log(`La posición del jugador 1 es: ${this._p1.getPosition()}`);
            this._p2.move(this._dice.throw());
            console.log(`La posición del jugador 2 es: ${this._p2.getPosition()}`);
             
            if(this._p1.getPosition() >= 100 && this._p2.getPosition() < 100){
                return console.log('Jugador 1 ganó la carrera');
            }else if (this._p2.getPosition() >= 100 && this._p1.getPosition() < 100) {
                return console.log('Jugador 2 ganó la carrera');
            } else if (this._p2.getPosition() >= 100 && this._p1.getPosition() >= 100) {
                return console.log('Empate');
            }
        }

    }
}

new Career();