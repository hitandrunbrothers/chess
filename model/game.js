const {
    Pawn,
    Rook,
    Knight,
    King,
    Queen,
    Bishop
} = require("./pieces/pieces");

class Game {
    constructor(boardString) {
        this.board = []
        this.initializeBoard();
        boardString ? this.loadBoard(boardString) : this.initializePieces()

    }

    initializeBoard() {
        for (let i = 0; i < 8; i++) {
            this.board.push([null, null, null, null, null, null, null, null]) // 8 x 8 board w/ no pieces
        }

    }
    initializePieces() {
        this.initiallizePawns()
        this.initializeRooks()
        this.initializeKnights()
        this.initializeBishops()
        this.initializeQueens()
        this.initializeKings()
    }

    initiallizePawns() {
        for (let i = 0; i < 8; i++) {
            this.board[1][i] = new Pawn({ x: i, y: 1, type: "Pawn", white: true })
            this.board[6][i] = new Pawn({ x: i, y: 6, type: "Pawn", black: true })
        }
    }

    initializeRooks() {
        this.board[0][0] = new Rook({ x: 0, y: 0, type: "Rook", white: true })
        this.board[0][7] = new Rook({ x: 0, y: 7, type: "Rook", white: true })

        this.board[7][0] = new Rook({ x: 7, y: 0, type: "Rook", black: true })
        this.board[7][7] = new Rook({ x: 7, y: 7, type: "Rook", black: true })
    }

    initializeKnights() {
        this.board[0][1] = new Knight({ x: 0, y: 1, type: "Knight", white: true })
        this.board[0][6] = new Knight({ x: 0, y: 6, type: "Knight", white: true })

        this.board[7][1] = new Knight({ x: 7, y: 1, type: "Knight", black: true })
        this.board[7][6] = new Knight({ x: 7, y: 6, type: "Knight", black: true })
    }

    initializeBishops() {
        this.board[0][2] = new Bishop({ x: 0, y: 2, type: "Bishop", white: true })
        this.board[0][5] = new Bishop({ x: 0, y: 5, type: "Bishop", white: true })

        this.board[7][2] = new Bishop({ x: 7, y: 2, type: "Bishop", black: true })
        this.board[7][5] = new Bishop({ x: 7, y: 5, type: "Bishop", black: true })
    }

    initializeQueens() {
        this.board[0][3] = new Queen({ x: 0, y: 3, type: "Queen", white: true })

        this.board[7][3] = new Queen({ x: 7, y: 3, type: "Queen", black: true })
    }

    initializeKings() {
        this.board[0][4] = new King({ x: 0, y: 4, type: "King", white: true })
        this.board[7][4] = new King({ x: 7, y: 4, type: "King", black: true })
    }

    convertForDynamo() {
        return JSON.stringify(this.board)
    }
    loadBoard(string) {
        const board = JSON.parse(string);
        for (let i = 0; i < 8; i++) {
            for (let j = 0; j < 8; j++) {
                const curr = board[i][j];
                if (curr) {
                    switch (String(curr.type)) {
                        case 'Pawn': {
                            this.board[i][j] = new Pawn(curr)
                            break;
                        }
                        case 'Rook': {
                            this.board[i][j] = new Rook(curr)
                            break;
                        }
                        case 'Bishop': {
                            this.board[i][j] = new Bishop(curr)
                            break;
                        }
                        case 'Knight': {
                            this.board[i][j] = new Knight(curr)
                            break;
                        }
                        case 'Queen': {
                            this.board[i][j] = new Queen(curr)
                            break;
                        }
                        case 'King': {
                            this.board[i][j] = new Pawn(curr)
                            break;
                        }
                    }
                } else {
                    this.board[i][j] = null;
                }
            }
        }
    }
}

module.exports = Game;