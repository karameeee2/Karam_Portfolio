const db = require('../../dbconnection');

exports.login = (req, res, next) => {
    db.query('SELECT ID, PASSWORD, MIDX FROM SURVEY_MEMBER WHERE ID = "admin1@surveyon.com" AND PASSWORD = "admin1"', (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
}