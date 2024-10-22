const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { userModel } = require('../../model');


const handleUserLogin = async (req, res) => {
    const { username, password } = req.body;
    if (!username || !password) {
        return res.status(400).json({ message: "username and password can't be empty." })
    }
    try {
        const dbUser = await userModel.findOne({ username });
        if (!dbUser) {
            return res.status(404).json({ message: "user not found" })
        }
        const isPasswordMatched = await bcrypt.compare(password, dbUser.password);
        if (!isPasswordMatched) {
            return res.status(401).json({ message: "incorrect password" })
        }

        const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
        const payload = {
            userId: dbUser._id,
        }
        const token = jwt.sign(payload, JWT_SECRET_KEY);
        const userId = dbUser._id;
        res.status(200).json({ message: "User found", token, userId })

    } catch (error) {
        res.status(401).json({ message: "Authentication Failed", error })
    }
}

module.exports = handleUserLogin;