const { handleDeletePlayer } = require("../controller/auth")
const deletePlayerRouter = require("express").Router()

deletePlayerRouter.delete('/delete', handleDeletePlayer)

module.exports = { deletePlayerRouter }