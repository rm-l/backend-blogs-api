const express = require('express');

const { loginController } = require('../controllers');

const { loginValidation } = require('../middlewares/loginFieldsValidation');

const router = express.Router();

router.post('/', loginValidation, loginController.login);

module.exports = router;
