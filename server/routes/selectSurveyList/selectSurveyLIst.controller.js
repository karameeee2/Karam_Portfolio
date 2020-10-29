const db = require('../../dbconnection');

exports.selectSurveyList = (req, res, next) => {
    db.query('SELECT * FROM SURVEY', (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
}