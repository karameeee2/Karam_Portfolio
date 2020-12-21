const express = require('express');
const router = express.Router();
const controller = require('./insertJoinSurvey.controller');

router.post('/', controller.insertJoinSurvey);

module.exports = router;