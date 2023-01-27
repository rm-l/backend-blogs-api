const jwt = require('jsonwebtoken');
const newUserService = require('../services/newUser.service');
const userService = require('../services/users.service');

const { JWT_SECRET } = process.env;

const register = async (req, res) => {
    const { type, message } = await newUserService.register(req.body);
    const { email, displayName, image } = req.body;
    if (type) {
        return res.status(409).json({ message });
    }

    const payload = {
        displayName,
        email,
        image,
    };

    const token = jwt.sign(payload, JWT_SECRET);
    return res.status(201).json({ token });
};

const getAll = async (_req, res) => {
    const users = await userService.getAll();
    return res.status(200).json(users);
  };

module.exports = {
    register,
    getAll,
};