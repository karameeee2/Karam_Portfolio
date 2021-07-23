const express = require('express');
const router = express.Router();
const controller = require('./insertSurvey.controller');
const { upload } = require('../../config/s3');

router.post('/', upload.single('img'), controller.insertSurvey);

module.exports = router;