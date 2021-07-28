const db = require('../../dbconnection');

exports.showNickname = (req, res, next) => {
    try{
        // if(!req.user) res.status(409).send()
        let midx = req.user.MIDX;
        console.log('nickname midx::', midx);
        db.query(`SELECT m.NICKNAME FROM SURVEY_MEMBER m WHERE MIDX = ${midx}`, (err, rows) => {
            if(!err) {
                console.log('nickname>>', rows);
                res.send(rows);
            } else {
                console.log(`query error : ${err}`);
                res.send(err);
            }
        })
    } catch {

    }
}