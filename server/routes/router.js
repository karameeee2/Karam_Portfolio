const express = require('express');
const os = require('os');
const db = require('../dbconnection');
const router = express.Router();

// 모든 요청에 대한 GET, POST 함수를 router.js에서 관리하면 됨

router.get('/', (req, res, next) => {
    res.send('React x Node.js express');
});

router.get('/getData', (req, res) => {
    db.query('SELECT * FROM SURVEY_NOTICE', (err, rows) => {
        if(!err) {// 만약 모든걸 찾는게 아니라면, 파라미터로 설문번호를 받던가 그런시긍로 해서
            // query 부분이 `SELECT * FROM SURVEY_NOTICE WHERE SUR`
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
})

router.get('/getMember', (req, res) => {
    db.query('SELECT * FROM SURVEY_MEMBER', (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
})

module.exports = router;