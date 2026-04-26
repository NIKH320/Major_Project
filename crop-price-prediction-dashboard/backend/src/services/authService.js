const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

exports.signupService = async (username, password) => {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
        username,
        password: hashedPassword
    });

    return user;
};

exports.loginService = async (username, password) => {
    const user = await User.findOne({ username });

    if (!user) throw new Error("User not found");

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) throw new Error("Invalid credentials");

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    return token;
};