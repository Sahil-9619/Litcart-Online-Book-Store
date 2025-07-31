const express = require('express');
const router = express.Router();
const loginController = require('../controllers/loginController');

//Post/api/users/login
router.post('/login', loginController.login);

module.exports = router;