const express = require('express');
const router = express.Router();
const controller = require('./withdraw.controller');

router.get('/', controller.withdraw);

module.exports = router;