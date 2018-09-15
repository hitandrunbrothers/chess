class Knight extends Piece {
  constructor (color) {
    super('knight', color);
  }

  generateValidMoves(startX, startY) {

    const validMoves = [];

    topRight1X = startX + 1;
    topRight1Y = startY + 2;
    if (isValidBoardPosition(topRight1X, topRight1Y)) {
      validMoves.push([topRight1X, topRight1Y]);
    }

    topRight2X = startX + 2;
    topRight2Y = startY + 1;
    if (isValidBoardPosition(topRight2X, topRight2Y)) {
      validMoves.push([topRight2X, topRight2Y])
    }



  }
}
