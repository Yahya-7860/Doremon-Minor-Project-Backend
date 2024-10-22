const { handleGetAllScore } = require('../controller/scoreHandlers')
const allScoreRouter = require('express').Router()

allScoreRouter.get('/allScore', handleGetAllScore)

module.exports = { allScoreRouter }