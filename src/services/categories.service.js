const { Category } = require('../models');

const register = async (name) => {
  const newCategory = await Category.create({ name });

  return { type: null, message: newCategory };
};

module.exports = {
  register,
};