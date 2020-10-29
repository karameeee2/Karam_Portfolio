const express = require('express');
const router = express.Router();
const controller = require('./login.controller');

router.get('/', controller.login);

module.exports = router;