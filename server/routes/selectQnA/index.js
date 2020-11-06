const express = require('express');
const router = express.Router();
const controller = require('./selectQnA.controller');

router.get('/', controller.selectQnA);

module.exports = router;