const express = require('express');
const router = express.Router();
const controller = require('./insertQuestion.controller');

router.get('/', controller.insertQuestion);

module.exports = router;