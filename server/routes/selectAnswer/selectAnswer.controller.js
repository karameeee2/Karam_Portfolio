const db = require('../../dbconnection');

exports.selectAnswer = (req, res, next) => {
    if(!req.query.qidx) res.status(400).render('error');

    db.query(`SELECT a.*, q.QIDX FROM SURVEY_ANSWER a LEFT JOIN SURVEY_QUESTION q ON a.QIDX = q.QIDX WHERE QIDX = ${req.query.qidx}`, (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
}
