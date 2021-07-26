const express = require('express');
const router = express.Router();

// -----------------------------------------------------------------------------------

const selectMember = require('./selectMember/index');
const register = require('./register/index');
const idCheck = require('./idCheck/index');
const countJoinedUser = require('./countJoinedUser/index');

const selectSurveyList = require('./selectSurveyList/index');
const selectEndList = require('./selectEndList/index');
const selectSurveyEach = require('./selectSurveyEach/index');
const insertSurvey = require('./insertSurvey/index');
const selectEndEach = require('./selectEndEach/index');

const selectQnA = require('./selectQnA/index');
const joinSurveyCheck = require('./joinSurveyCheck/index');
const insertJoinSurvey = require('./insertJoinSurvey');

const selectQuestion = require('./selectQuestion/index');
const insertQuestion = require('./insertQuestion/index');

const selectAnswer = require('./selectAnswer/index');
const insertAnswer = require('./insertAnswer/index');

const selectAgeCount = require('./selectAgeCount/index');

const noticeList = require('./noticeList/index');
const noticeDetail = require('./noticeDetail/index');
const updateHit = require('./updateHIt/index');

const login = require('./login/index');
const logout = require('./logout/index');
const withdraw = require('./withdraw/index');

const search = require('./search/index');

// -------------------------------------------------------------------------------------

router.use('/api/selectMember', selectMember);
router.use('/api/register', register);
router.use('/api/idCheck', idCheck);
router.use('/api/countJoinedUser', countJoinedUser);

router.use('/api/selectSurveyList', selectSurveyList);
router.use('/api/selectEndList', selectEndList);
router.use('/api/selectSurveyEach', selectSurveyEach);
router.use('/api/insertSurvey', insertSurvey);
router.use('/api/selectEndEach', selectEndEach);

router.use('/api/selectQna', selectQnA)
router.use('/api/joinSurveyCheck', joinSurveyCheck);
router.use('/api/insertJoinSurvey', insertJoinSurvey);

router.use('/api/selectQuestion', selectQuestion);
router.use('/api/insertQuestion', insertQuestion);

router.use('/api/selectAnswer', selectAnswer);
router.use('/api/insertAnswer', insertAnswer);

router.use('/api/selectAgeCount', selectAgeCount);

router.use('/api/noticeList', noticeList);
router.use('/api/noticeDetail', noticeDetail);
router.use('/api/updateHIt', updateHit)

router.use('/api/login', login);

router.use('/api/login/success', (req, res) => {
    console.log('here', req.session, req.user);
    res.end();
});

router.get('/api/logout', async (req, res) => {
    console.log('logout!!!!!!');
    req.logout();
    res.end();
});

router.get('/api/ex', (req, res) => {
    console.log(req.user);
    res.send('done');
})

// router.use('localRegister', new Local)

// router.post('/register', (req, res) => {
    
// })

router.use('/api/withdraw', withdraw);

router.use('/api/search', search);

module.exports = router;