const jwt = require("jsonwebtoken");

const authMiddleware = (req, res, next) => {
    try {
        const { authorization } = req.headers;
        if (!authorization) {
            return res.status(401).json({ error: 'unauthorize user' });
        }

        //Verify Token
        const { userId } = jwt.verify(authorization, process.env.JWT_SECRET);
        req.user = userId;

        next();
    } catch (error) {
        return res.status(401).json({ error: 'unauthorize user' });
    }
}

module.exports = { authMiddleware };