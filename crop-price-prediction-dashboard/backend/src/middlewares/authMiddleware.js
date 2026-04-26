const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const authHeader = req.header("Authorization");

    if (!authHeader) {
        return res.status(401).json({ msg: "No token" });
    }

    // Expecting: "Bearer <token>"
    const token = authHeader.split(" ")[1];

    if (!token) {
        return res.status(401).json({ msg: "Invalid token format" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch {
        res.status(401).json({ msg: "Invalid token" });
    }
};