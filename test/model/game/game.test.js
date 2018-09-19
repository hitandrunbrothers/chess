const { expect } = require("chai");
const Game = require("../../../model/game");
describe('Testing Game Class - ',()=>{
    it.only('Should create a valid game', ()=>{
        const game = new Game();
        const gameFromBoard = new Game(game.convertForDynamo())
        console.log(gameFromBoard.board[0][0])
        return expect(gameFromBoard.board).to.deep.equal(game.board)

    })

})