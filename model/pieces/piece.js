class Piece{
    constructor({x,y,white,black,type}){
        this.x = x;
        this.y = y;
        if(white){
            this.white = true
        } 
        if(black){
            this.black = true;
        }
        this.type = type;
    }
}
module.exports = Piece;
