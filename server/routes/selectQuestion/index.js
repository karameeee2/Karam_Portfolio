const express = require('express');
const router = express.Router();
const controller = require('./selectQuestion.controller');

router.get('/', controller.selectQuestion);

module.exports = router;