const express = require('express');

const { userController } = require('../controllers');

const { newUserValidation } = require('../middlewares/newUserValidation');
const { tokenValidation } = require('../middlewares/tokenValidation');

const router = express.Router();

router.post('/', newUserValidation, userController.register);

router.get('/', tokenValidation, userController.getAll);

module.exports = router;
