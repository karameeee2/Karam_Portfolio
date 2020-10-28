const express = require('express');
const router = express.Router();
const controller = require('./selectAnswer.controller');

router.get('/', controller.selectAnswer);

module.exports = router;