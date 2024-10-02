const bcrypt = require('bcrypt')

const hashedPassword = async (req, res, next) => {
    const { password } = req.body
    if (!password) {
        res.status(400).json({ message: "password can not be empty" })
    }

    try {
        const saltRount = 10;
        req.body.password = await bcrypt.hash(password, saltRount)
        next();

    } catch (error) {
        res.status(500).json({ message: "unable to hash", error })
    }
}

module.exports = hashedPassword