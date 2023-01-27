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

const getById = async (id) => {
  const user = await User.findOne({
      where: { id },
      attributes: { exclude: ['password'] },
  });

  if (!user) {
      return { type: 'error', message: 'User does not exist' };
  }

  return { type: null, message: user };
};

module.exports = {
    login,
    getAll,
    getById,
};