const db = require('../../dbconnection');

exports.selectQuestion = (req, res, next) => {
    let sidx = req.query.sidx;

    
    db.query(`SELECT q.*, s.SIDX FROM SURVEY_QUESTION q LEFT JOIN SURVEY s ON q.SIDX = s.SIDX WHERE q.SIDX = ${sidx}`, (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
}