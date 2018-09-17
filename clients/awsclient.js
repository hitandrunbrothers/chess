const AWS = require("aws-sdk");
const uuid = require("uuid/v4");
const { dynamo: { TableName, config } } = require("../config.json");

const createGame = () => {
    AWS.config.update(config);

    const docClient = new AWS.DynamoDB.DocumentClient();
    const params = {
        TableName,
        Item: {
            gameId: uuid()
        }
    };

    console.log("Adding a new item...");
    docClient.put(params, function (err, data) {
        if (err) {
            console.error("Unable to create game. Error JSON:", JSON.stringify(err, null, 2));
        } else {
            console.log("Game Created:", JSON.stringify(data, null, 2));
        }
    });
}

const getGame = (gameId, res) => {

    AWS.config.update(config);
    const docClient = new AWS.DynamoDB.DocumentClient();

    const params = {
        TableName,
        Key: {
            gameId
        }
    };
    docClient.get(params, function (err, data) {
        if (err) {
            console.error("Unable to read item. Error JSON:", JSON.stringify(err, null, 2));
            res.status(500).send(err);
        } else {
            console.log("GetItem succeeded:", JSON.stringify(data, null, 2));
            res.send(data).status(200);
        }
    });
}

module.exports = {
    createGame,
    getGame
};