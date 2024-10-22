const { registerRouter } = require("./register");
const { loginRouter } = require('./login');
const { scoreRouter } = require("./score");
const { getScoreRouter } = require("./getScore");

module.exports = { registerRouter, loginRouter, scoreRouter, getScoreRouter }