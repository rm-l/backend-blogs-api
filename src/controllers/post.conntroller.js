const categorieService = require('../services/categories.service');
const postService = require('../services/post.service');

const register = async (req, res) => {
    const { title, content, categoryIds } = req.body;
    const userId = req.user.id;
    const { message } = await categorieService.getAll();

    const checkedIds = message.map((e) => e.id);

    const verifyIds = categoryIds.some((cat) => !checkedIds.includes(cat));

    if (verifyIds) {
        return res.status(400).json({ message: 'one or more "categoryIds" not found' });
    }

    const post = await postService.register(title, categoryIds, content, userId);

    return res.status(201).json(post);
};

module.exports = {
    register,
};