const db = require('../../dbconnection');

exports.noticeList = (req, res, next) => {
    db.query('SELECT NIDX, NSUBJECT, CREATEDATE, HIT FROM SURVEY_NOTICE', (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
}