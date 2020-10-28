const express = require('express');
const router = express.Router();
const controller = require('./surveyInfo.controller');

router.get('/', controller.surveyInfo);

module.exports = router;