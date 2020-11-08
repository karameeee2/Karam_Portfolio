const db = require('../../dbconnection');

exports.selectSurveyEach = (req, res, next) => {
    if(!req.query.sidx) res.status(400).render('error');
    
    db.query(`select a.*, q.*, s.*, m.NICKNAME from SURVEY_ANSWER a inner join SURVEY_QUESTION q on a.QIDX=q.QIDX ` + 
    `inner join SURVEY s on q.SIDX=s.SIDX inner join SURVEY_MEMBER m on s.MIDX=m.MIDX WHERE SIDX = ${req.query.sidx}`, (err, rows) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
    // db.query(`SELECT s.*, m.NICKNAME FROM SURVEY s LEFT JOIN SURVEY_MEMBER m ON s.MIDX = m.MIDX WHERE SIDX = ${req.query.sidx}`, (err, rows) => {
    //     if (!err) {
    //         res.send(rows);
    //     } else {
    //         console.log(`query error : ${err}`);
    //         res.send(err);
    //     }
    // })
}