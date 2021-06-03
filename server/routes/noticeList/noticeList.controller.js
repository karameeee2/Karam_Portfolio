const db = require('../../dbconnection');

exports.noticeList = (req, res, next) => {
    if(!db) {
        res.status(500).send('db connection failed');
        return;
    }

    db.query('SELECT NIDX, NSUBJECT, CREATEDATE, HIT FROM SURVEY_NOTICE ORDER BY NIDX DESC', (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.status(500).send(err);
        }
    })
}