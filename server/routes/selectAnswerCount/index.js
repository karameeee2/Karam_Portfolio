const express = require('express');
const router = express.Router();
const controller = require('./selectAnswerCount.controller');

router.get('/', controller.selectAnswerCount);

module.exports = router;