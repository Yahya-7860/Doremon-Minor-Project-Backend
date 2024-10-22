const { handleGetOneScore } = require("../controller/scoreHandlers");
const getScoreRouter = require('express').Router()

getScoreRouter.get('/getScore/:playerid', handleGetOneScore)

module.exports = { getScoreRouter }