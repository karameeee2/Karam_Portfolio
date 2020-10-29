const express = require('express');
const router = express.Router();
const controller = require('./insertAnswer.controller');

router.get('/', controller.insertAnswer);

module.exports = router;