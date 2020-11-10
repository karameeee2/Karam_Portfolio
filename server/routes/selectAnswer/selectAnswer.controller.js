const db = require('../../dbconnection');

exports.selectAnswer = (req, res, next) => {

    db.query(`SELECT a.ANSWER, q.QIDX FROM SURVEY_ANSWER a LEFT JOIN SURVEY_QUESTION q ON a.QIDX = q.QIDX WHERE a.QIDX = q.QIDX `, (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
}
