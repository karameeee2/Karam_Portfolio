const db = require('../../dbconnection');

exports.updateHit = (req, res, next) => {
    let nidx = req.query.nidx;

    db.query(`UPDATE SURVEY_NOTICE SET HIT = HIT + 1 WHERE NIDX = ${nidx}`, (err, rows) => {
        if(!err) {
            // res.send(rows);
            console.log('updateHit success');
        } else {
            console.log(`updateHIt error: ${err}`);
            res.send(err);
        }
    })
}