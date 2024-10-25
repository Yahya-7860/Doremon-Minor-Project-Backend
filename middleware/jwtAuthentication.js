const jwt = require('jsonwebtoken')


const jwtAuthentication = (req, res, next) => {
    const bearerToken = req.headers?.authorization;
    const token = bearerToken?.split(" ")[1];

    if (!token) {
        return res.status(403).json({ message: "access denied" });
    }
    try {
        const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
        const decodedUser = jwt.verify(token, JWT_SECRET_KEY);
        req.playerid = decodedUser.userId;
        next();
    } catch (error) {
        res.status(401).json({ Error: "Invalid token or session Expired, Login Again" });
    }
}

module.exports = jwtAuthentication;