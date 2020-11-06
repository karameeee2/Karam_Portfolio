const db = require('../../dbconnection');

exports.selectSurveyEach = (req, res, next) => {
    if(!req.query.sidx) res.status(400).render('error');
    
    db.query(`SELECT s.*, m.NICKNAME FROM SURVEY s LEFT JOIN SURVEY_MEMBER m ON s.MIDX = m.MIDX WHERE SIDX = ${req.query.sidx}`, (err, rows) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
}