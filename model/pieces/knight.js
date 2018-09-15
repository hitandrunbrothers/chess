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

    topLeft1X = startX - 1;
    topLeft1Y = startY + 2;
    if (isValidBoardPosition(topLeft1X, topLeft1Y)) {
      validMoves.push([topLeft1X, topLeft1Y]);
    }

    topLeft2X = startX - 2;
    topLeft2Y = startY + 1;
    if (isValidBoardPosition(topLeft2X, topLeft2Y)) {
      validMoves.push([topLeft2X, topLeft2Y])
    }

    botRight1X = startX + 1;
    botRight1Y = startY - 2;
    if (isValidBoardPosition(botRight1X, botRight1Y)) {
      validMoves.push([botRight1X, botRight1Y]);
    }

    botRight2X = startX + 2;
    botRight2Y = startY - 1;
    if (isValidBoardPosition(botRight2X, botRight2Y)) {
      validMoves.push([botRight2X, botRight2Y])
    }

    botLeft1X = startX - 1;
    botLeft1Y = startY - 2;
    if (isValidBoardPosition(topLeft1X, topLeft1Y)) {
      validMoves.push([topLeft1X, topLeft1Y]);
    }

    botLeft2X = startX - 2;
    botLeft2Y = startY - 1;
    if (isValidBoardPosition(botLeft2X, botLeft2Y)) {
      validMoves.push([botLeft2X, botLeft2Y])
    }

    return validMoves

  }
}
