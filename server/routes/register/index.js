const express = require('express');
const router = express.Router();
const controller = require('./register.controller');

router.post('/', controller.register);

module.exports = router;