const express = require('express');

const { userController } = require('../controllers');

const { loginMiddleware } = require('../middlewares/loginFieldsValidation');

const router = express.Router();

router.post('/', loginMiddleware, userController.login);

module.exports = router;
