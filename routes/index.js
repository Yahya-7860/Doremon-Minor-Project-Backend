const { registerRouter } = require("./register");
const { loginRouter } = require('./login');
const { scoreRouter } = require("./score");
const { getOneScoreRouter } = require("./getOneScore");
const { allScoreRouter } = require("./getAllScores");
const { deletePlayerRouter } = require("./deletePlayer");
const { deletePlayerScoreChartRouter } = require("./deletePlayerScoreChart");

module.exports = { registerRouter, loginRouter, deletePlayerRouter, scoreRouter, getOneScoreRouter, allScoreRouter, deletePlayerScoreChartRouter }