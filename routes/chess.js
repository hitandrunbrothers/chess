var express = require('express');
var app = express.Router();
const { createGame, getGame } = require("../clients/awsclient");
/* GET home page. */
app.get('/', function(req, res, next) {
    res.status(200).send({livecheck:{status:"good"}})
  });
app.post('/createGame', function(req, res, next) {
  const response = createGame()
  return res.status(200).send(response)
    
});
app.get('/games/:gameId', (req, res, next) => getGame(req.params.gameId,res));
module.exports = app;