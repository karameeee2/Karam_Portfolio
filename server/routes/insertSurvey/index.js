const express = require('express');
const router = express.Router();
const controller = require('./insertSurvey.controller');

router.get('/', controller.insertSurvey);

module.exports = router;