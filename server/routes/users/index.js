const express = require('express');
const router = express.Router();
const controller = require('./users.controller');

router.get('/', controller.users);

module.exports = router;