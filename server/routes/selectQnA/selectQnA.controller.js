const db = require('../../dbconnection');

exports.selectQnA = async (req, res, next) => {
    if(!req.query.sidx) res.status(400).render('error');
    
    db.query(`SELECT a.ANSWER, q.QUESTION FROM SURVEY_ANSWER a INNER JOIN SURVEY_QUESTION q ON a.QIDX = q.QIDX INNER JOIN SURVEY s ON q.SIDX = s.SIDX WHERE s.SIDX = ${req.query.sidx};`, (err, rows) => {
        console.log('rows:: ',rows);
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
}
