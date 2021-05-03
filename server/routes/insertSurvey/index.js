const express = require('express');
const router = express.Router();
const controller = require('./insertSurvey.controller');

router.post('/', controller.insertSurvey);

module.exports = router;