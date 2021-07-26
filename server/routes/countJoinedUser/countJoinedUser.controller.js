const db = require('../../dbconnection');

exports.countJoinedUser = (req, res, next) => {
    let sidx = req.body.sidx;

    db.query(`SELECT COUNT(DISTINCT MIDX) FROM SURVEY_COUNT WHERE SIDX = ${sidx}`, (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error: ${err}`);
            res.send(err);
        }
    })
}