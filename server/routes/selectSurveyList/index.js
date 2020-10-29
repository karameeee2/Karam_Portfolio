const express = require('express');
const router = express.Router();
const controller = require('./selectSurveyLIst.controller');

router.get('/', controller.selectSurveyList);

module.exports = router;