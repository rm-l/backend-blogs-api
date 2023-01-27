const { User } = require('../models');

const login = async (email, password) => {
  const validUser = await User.findOne({
    where: { email, password },
  });
  if (!validUser) return { type: 400, message: 'Invalid fields' };

  return { type: null, message: '' };
};

const getAll = async () => {
  const users = await User.findAll({ attributes: { exclude: ['password'] } });
  return users;
};

module.exports = {
    login,
    getAll,
};