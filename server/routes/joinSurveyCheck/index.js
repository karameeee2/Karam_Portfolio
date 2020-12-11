const express = require('express');
const router = express.Router();
const controller = require('./joinSurveyCheck.controller');

router.get('/', controller.joinSurveyCheck);

module.exports = router;