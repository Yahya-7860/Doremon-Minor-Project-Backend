const { handleDeletePlayerScoreChart } = require('../controller/scoreHandlers');
const deletePlayerScoreChartRouter = require('express').Router();

deletePlayerScoreChartRouter.delete('/deleteScore', handleDeletePlayerScoreChart)

module.exports = { deletePlayerScoreChartRouter }