const db = require('../../dbconnection');

exports.selectAnswer = (req, res, next) => {
    let qidx = req.query.qidx;
    db.query(`SELECT a.ANSWER, q.QIDX FROM SURVEY_ANSWER a LEFT JOIN SURVEY_QUESTION q ON a.QIDX = q.QIDX WHERE a.QIDX = ${qidx} `, (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
}
