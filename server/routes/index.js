const express = require('express');
const router = express.Router();
const selectMember = require('./selectMember/index');
const insertMember = require('./insertMember/index');
const selectSurveyList = require('./selectSurveyList/index');
const selectEndList = require('./selectEndList/index');
const selectSurveyEach = require('./selectSurveyEach/index');
const insertSurvey = require('./insertSurvey/index');
const selectQuestion = require('./selectQuestion/index');
const insertQuestion = require('./insertQuestion/index');
const selectAnswer = require('./selectAnswer/index');
const insertAnswer = require('./insertAnswer/index');
const noticeList = require('./noticeList/index');
const noticeDetail = require('./noticeDetail/index');
const login = require('./login/index');
const withdraw = require('./withdraw/index');

router.use('/selectMember', selectMember);
router.use('/insertMember', insertMember);

router.use('/selectSurveyList', selectSurveyList);
router.use('/selectEndList', selectEndList);
router.use('/selectSurveyEach', selectSurveyEach);
router.use('/insertSurvey', insertSurvey);

router.use('/selectQuestion', selectQuestion);
router.use('/insertQuestion', insertQuestion);

router.use('/selectAnswer', selectAnswer);
router.use('/insertAnswer', insertAnswer);

router.use('/noticeList', noticeList);
router.use('/noticeDetail', noticeDetail);

router.use('/login', login);

router.use('/withdraw', withdraw);

module.exports = router;