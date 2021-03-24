const db = require('../../dbconnection');

exports.selectAgeCount = (req, res, next) => {
    let aidx = req.query.aidx;
    // console.log(aidx);
    db.query(
        `SELECT 
            c.AIDX,
            SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH BETWEEN 10 AND 19, 1, 0)) '10s',
            SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH BETWEEN 20 AND 29, 1, 0)) '20s',
            SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH BETWEEN 30 AND 39, 1, 0)) '30s',
            SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH BETWEEN 40 AND 49, 1, 0)) '40s',
            SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH BETWEEN 50 AND 59, 1, 0)) '50s',
            SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH < 10 OR DATE_FORMAT(NOW(),'%Y') - c.BIRTH > 59, 1, 0)) 'others'
        FROM 
            SURVEY_COUNT c WHERE c.AIDX=${aidx}`, (err, rows) => {
        if(!err) {
            res.send(rows);
            console.log('countRows::', rows);
        } else {
            console.log(`query error: ${err}`);
            res.send(err);
        }
    })
}