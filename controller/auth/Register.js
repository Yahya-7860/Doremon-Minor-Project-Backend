const mongoose = require("mongoose")
const { userModel } = require("../../model")

const hanldeUserRegister = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "username and password can be empty." })
    }

    try {
        const addedUser = await userModel.create({ username: username, password: password })
        res.status(200).json({ message: "User Registered", addedUser })
    }
    catch (error) {
        console.log(error)
        res.status(500).json({ error })
    }
}

module.exports = hanldeUserRegister;