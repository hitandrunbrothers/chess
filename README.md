RoBros Chess -- MERN stack

Back End
POST - /createGame
    empty body
    return: {
        board: {

        }
    }

PUT - /move 
    body: {
        gameId: '',
        origin:{
            x:'',
            y:''
        },
        destination:{
            x:'',
            y:''
        }
    }
    response:
        {
            game:{
                board:{

                }
                killedPieces:{

                }
                additionalData:{

                }
            }
        }
        


Front End

Click on create Game
-> POST /createGame

-> chess.io/{gameid}
