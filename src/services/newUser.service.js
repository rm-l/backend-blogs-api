const { User } = require('../models');

const register = async (user) => {
    const { displayName, email, password, image } = user;
    const searchEmail = await User.findOne({ where: { email } });

    if (searchEmail) return { type: 'error', message: 'User already registered' };
    if (image) {
        await User.create({ displayName, email, password, image });
        return { type: null, message: '' };
    }
    await User.create({ displayName, email, password });
    return { type: null, message: '' };
};

module.exports = {
    register,
};