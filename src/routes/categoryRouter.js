const express = require('express');

const { categoryController } = require('../controllers');

const { categoyValidation } = require('../middlewares/categoyValidation');
const { tokenValidation } = require('../middlewares/tokenValidation');

const router = express.Router();

router.post('/', tokenValidation, categoyValidation, categoryController.register);

module.exports = router;