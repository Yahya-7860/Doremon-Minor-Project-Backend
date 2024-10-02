
const registerRouter = require('express').Router();
const { hanldeUserRegister } = require('../controller/auth');

registerRouter.post("/register", hanldeUserRegister);

module.exports = { registerRouter };