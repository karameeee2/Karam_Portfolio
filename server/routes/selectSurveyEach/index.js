const express = require('express');
const router = express.Router();
const controller = require('./selectSurveyEach.controller');

router.get('/', controller.selectSurveyEach);

module.exports = router;