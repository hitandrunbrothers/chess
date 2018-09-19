const { expect } = require("chai");
const Pawn = require('../../../model/pieces/pawn');

describe('Testing Piece Class - ',()=>{
    it('Should create a valid pawn', ()=>{
        const piece = new Pawn({x:2,y:3,type: 'Pawn', white:true});
        expect(piece.x).to.equal(2)
        expect(piece.y).to.equal(3)
        expect(piece.type).to.equal('Pawn')
        expect(piece.black).to.be.undefined;
        return expect(piece.white).to.equal(true)
    })

})