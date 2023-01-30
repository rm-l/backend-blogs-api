const jwt = require('jsonwebtoken');
const { usersService } = require('../services');

const { JWT_SECRET } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;

  const { type, message } = await usersService.login(email, password);
  if (type) return res.status(type).json({ message });

  const payload = {
    email: req.body.email,
    id: message.id,
  };

  const token = jwt.sign(payload, JWT_SECRET);
  return res.status(200).json({ token });
};

module.exports = {
  login,
};