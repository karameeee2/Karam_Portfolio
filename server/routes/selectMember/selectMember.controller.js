const db = require('../../dbconnection');

exports.selectMember = (req, res, next) => {
    db.query('SELECT ID, NAME, NICKNAME, GENDER, BIRTH FROM SURVEY_MEMBER WHERE MIDX = 1', (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
}