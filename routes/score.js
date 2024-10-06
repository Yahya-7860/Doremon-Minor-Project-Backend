const { handleScore } = require('../controller/scoreHandlers');
const scoreRouter = require('express').Router();

scoreRouter.put('/score', handleScore)

module.exports = { scoreRouter };