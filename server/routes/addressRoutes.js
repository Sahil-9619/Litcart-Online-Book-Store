const express = require('express');
const router = express.Router();
const { addaddress } = require('../controllers/addressController');

router.post("/add",addaddress);

module.exports = router;