const db = require('../../dbconnection');

exports.noticeDetail = async(req, res, next) => {
    try {
        if(!req.query.nidx) res.status(400).render('error');
        await db.query(`SELECT * FROM SURVEY_NOTICE WHERE NIDX = ${req.query.nidx}`, (err, rows) => {
            // console.log('rows:: ',rows);
            if(!err) {
                // console.log('성공');
                res.send(rows);
            } else {
                console.log(`query error : ${err}`);
                res.send(err);
            }
        })
    } catch (error) {
        
    }
}