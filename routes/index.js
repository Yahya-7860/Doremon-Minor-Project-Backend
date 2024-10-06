const { registerRouter } = require("./register");
const { loginRouter } = require('./login');
const { scoreRouter } = require("./score");

module.exports = { registerRouter, loginRouter, scoreRouter }