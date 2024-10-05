const loginRouter = require('express').Router();
const { handleUserLogin } = require('../controller/auth');

loginRouter.get('/login', handleUserLogin);

module.exports = { loginRouter }