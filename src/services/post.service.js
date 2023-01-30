const Sequelize = require('sequelize');
const config = require('../config/config');

const { PostCategory, BlogPost } = require('../models');

const env = process.env.NODE_ENV;
const sequelize = new Sequelize(config[env]);

const register = async (title, categoryIds, content, userId) => {
    const transactions = await sequelize.transaction();
    try {
        const newPost = await BlogPost.create(
            { title, content, userId },
            { transaction: transactions },
        );
        await Promise.all(categoryIds.map(async (category) => {
            await PostCategory.create(
                { categoryId: category, postId: newPost.id },
                { transaction: transactions },
            );
        }));
        await transactions.commit();
        return newPost;
    } catch (error) {
        await transactions.rollback();
        throw error;
    }
};

module.exports = {
    register,
};