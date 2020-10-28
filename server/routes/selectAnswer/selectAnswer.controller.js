const db = require('../../dbconnection');

exports.selectAnswer = (req, res, next) => {
    db.query('SELECT * FROM SURVEY_ANSWER WHERE QIDX = 1', (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
}
