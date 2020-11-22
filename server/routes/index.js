const express = require('express');
const router = express.Router();

// -----------------------------------------------------------------------------------

const selectMember = require('./selectMember/index');
const register = require('./register/index');

const selectSurveyList = require('./selectSurveyList/index');
const selectEndList = require('./selectEndList/index');
const selectSurveyEach = require('./selectSurveyEach/index');
const insertSurvey = require('./insertSurvey/index');
const selectEndEach = require('./selectEndEach/index');

const selectQnA = require('./selectQnA/index');

const selectQuestion = require('./selectQuestion/index');
const insertQuestion = require('./insertQuestion/index');

const selectAnswer = require('./selectAnswer/index');
const insertAnswer = require('./insertAnswer/index');

const noticeList = require('./noticeList/index');
const noticeDetail = require('./noticeDetail/index');

const login = require('./login/index');
const withdraw = require('./withdraw/index');

const search = require('./search/index');

// -------------------------------------------------------------------------------------

router.use('/selectMember', selectMember);
router.use('/register', register);

router.use('/selectSurveyList', selectSurveyList);
router.use('/selectEndList', selectEndList);
router.use('/selectSurveyEach', selectSurveyEach);
router.use('/insertSurvey', insertSurvey);
router.use('/selectEndEach', selectEndEach);

router.use('/selectQna', selectQnA)

router.use('/selectQuestion', selectQuestion);
router.use('/insertQuestion', insertQuestion);

router.use('/selectAnswer', selectAnswer);
router.use('/insertAnswer', insertAnswer);

router.use('/noticeList', noticeList);
router.use('/noticeDetail', noticeDetail);

router.use('/login', login);

router.use('/login/success', (req, res) => {
    console.log('here', req.session, req.user);
    //res.redirect('/');
    res.end();
});

router.post('/logout', (req, res) => {
    req.logout();
    req.session.destroy(() => {
        res.clearCookie('connect.sid', {path: '/'});
    });
    res.end();
});

router.get('/ex', (req, res) => {
    console.log(req.user);
    res.send('done');
})

// router.use('localRegister', new Local)

// router.post('/register', (req, res) => {
    
// })


router.use('/withdraw', withdraw);

router.use('/search', search);

module.exports = router;