const db = require('../../dbconnection');

exports.noticeDetail = (req, res, next) => {
    db.query('SELECT * FROM SURVEY_NOTICE WHERE NIDX = 1', (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    }) 
}