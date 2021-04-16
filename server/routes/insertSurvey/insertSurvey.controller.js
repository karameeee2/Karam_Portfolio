const db = require('../../dbconnection');

exports.insertSurvey = (req, res, next) => {
    const ssubject = req.body.ssubject;
    const scontent = req.body.scontent;
    const midx = req.user.MIDX;
    const sdate = req.body.sdate;
    const edate = req.body.edate;
    const tag = req.body.tag;
    const img = req.body.img;
    
    db.query('INSERT INTO SURVEY (SSUBJECT, SCONTENT, MIDX, SDATE, EDATE, TAG, IMG) '+ 
    `VALUES ('${ssubject}', '${scontent}', '${midx}', '${sdate}', '${edate}', '${tag}', '${img}')`, (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
    console.log('survey insert success');
}