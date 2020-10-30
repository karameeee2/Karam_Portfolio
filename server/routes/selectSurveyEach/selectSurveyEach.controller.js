const db = require('../../dbconnection');

exports.selectSurveyEach = (req, res, next) => {
    if(!req.query.sidx) res.status(400).render('error');
    
    db.query(`SELECT * FROM SURVEY WHERE SIDX = ${req.query.sidx}`, (err, rows) => {
        if (!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
}