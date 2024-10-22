const { handleGetOneScore } = require("../controller/scoreHandlers");
const getOneScoreRouter = require('express').Router()

getOneScoreRouter.get('/getScore/:playerid', handleGetOneScore)

module.exports = { getOneScoreRouter }