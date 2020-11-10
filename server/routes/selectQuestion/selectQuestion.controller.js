const db = require('../../dbconnection');

exports.selectQuestion = (req, res, next) => {

    db.query(`SELECT q.QUESTION, s.SIDX FROM SURVEY_QUESTION q LEFT JOIN SURVEY s ON q.SIDX = s.SIDX WHERE q.SIDX = s.SIDX`, (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
}
