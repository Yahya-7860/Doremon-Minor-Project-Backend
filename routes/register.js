const registerRouter = require('express').Router();
const { handleUserRegister } = require('../controller/auth');

registerRouter.post("/register", handleUserRegister);

module.exports = { registerRouter };