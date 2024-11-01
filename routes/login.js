const loginRouter = require('express').Router();
const { handleUserLogin } = require('../controller/auth');

loginRouter.post('/login', handleUserLogin);

module.exports = { loginRouter }