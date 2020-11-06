const db = require('../../dbconnection');

exports.selectQnA = (req, res, next) => {
    if(!req.query.sidx) res.status(400).render('error');

    // let answer = `SELECT a.*, q.QIDX FROM SURVEY_ANSWER a LEFT JOIN SURVEY_QUESTION q ON a.QIDX = q.QIDX WHERE QIDX = ${req.query.qidx};`;
    // let question = `SELECT q.*, s.SIDX FROM SURVEY_QUESTION q LEFT JOIN SURVEY s ON q.SIDX = s.SIDX WHERE q.SIDX = ${req.query.sidx};`;
    db.query(`SELECT a.ANSWER, q.QUESTION FROM  SURVEY_ANSWER a INNER JOIN SURVEY_QUESTION q ON a.QIDX = q.QIDX INNER JOIN SURVEY s ON q.SIDX = s.SIDX WHERE s.SIDX = 1 GROUP BY AIDX;`, (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
}
