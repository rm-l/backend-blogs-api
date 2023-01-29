const categorieService = require('../services/categories.service');

const register = async (req, res) => {
  const { name } = req.body;
  const { type, message } = await categorieService.register(name);
  if (type) return res.status(type).json({ message });

  return res.status(201).json(message);
};

const getAll = async (_req, res) => {
    const { type, message } = await categorieService.getAll();
    if (type) return res.status(type).json({ message });
  
    return res.status(200).json(message);
  };

module.exports = {
  register,
  getAll,
};