const { signupService, loginService } = require("../services/authService");

// Signup
exports.signup = async (req, res) => {
    try {
        const { username, password } = req.body;

        const user = await signupService(username, password);

        res.json(user);
    } catch (error) {
        res.status(500).json({ msg: error.message });
    }
};

// Login
exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;

        const token = await loginService(username, password);

        res.json({ token });
    } catch (error) {
        res.status(400).json({ msg: error.message });
    }
};