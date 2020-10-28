const db = require('../../dbconnection');

exports.selectQuestion = (req, res, next) => {
    db.query('SELECT * FROM SURVEY_QUESTION WHERE SIDX = 1', (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
}
