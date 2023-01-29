const { Category } = require('../models');

const register = async (name) => {
  const newCategory = await Category.create({ name });

  return { type: null, message: newCategory };
};

const getAll = async () => {
    const result = await Category.findAll();
  
    return { type: null, message: result };
  };

module.exports = {
  register,
  getAll,
};