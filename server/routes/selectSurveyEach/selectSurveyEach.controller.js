const db = require('../../dbconnection');

exports.selectSurveyEach = (req, res, next) => {
    db.query('SELECT * FROM SURVEY WHERE SIDX = 1', (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
}