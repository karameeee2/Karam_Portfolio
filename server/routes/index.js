const express = require('express');
const router = express.Router();
const surveyInfo = require('./surveyInfo/index');
const selectQuestion = require('./selectQuestion/index');
const selectAnswer = require('./selectAnswer/index');
const noticeList = require('./noticeList/index');
const noticeDetail = require('./noticeDetail/index');
const user = require('./users/index');


router.use('/surveyInfo', surveyInfo);
router.use('/selectQuestion', selectQuestion);
router.use('/selectAnswer', selectAnswer);
router.use('/noticeList', noticeList);
router.use('/noticeDetail', noticeDetail);
router.use('/user', user);

module.exports = router;