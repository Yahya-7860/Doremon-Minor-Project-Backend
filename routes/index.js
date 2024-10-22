const { registerRouter } = require("./register");
const { loginRouter } = require('./login');
const { scoreRouter } = require("./score");
const { getOneScoreRouter } = require("./getOneScore");
const { allScoreRouter } = require("./getAllScores");

module.exports = { registerRouter, loginRouter, scoreRouter, getOneScoreRouter, allScoreRouter }