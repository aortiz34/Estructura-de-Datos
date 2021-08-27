
export default class Player{
    constructor() {
        this._position = 0;
    }

    getPosition(){
        return this._position;
    }

    move(number){
        if (number == 1 || number == 3 || number == 5){
            return this._position += 2;
        } else if (number == 2 || number == 6) {
            return this._position += 1;
        } else{
            return this._position += 3;
        }
    }
}