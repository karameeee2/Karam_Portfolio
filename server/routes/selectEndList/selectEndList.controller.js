const db = require('../../dbconnection');

exports.selectEndList = async (req, res, next) => {
    try{
        await db.query(`SELECT s.*, m.NICKNAME, `
            + `(SELECT COUNT(DISTINCT MIDX) FROM SURVEY_COUNT C WHERE SIDX=s.SIDX) AS 'JOINCOUNT' `
            + `FROM SURVEY s LEFT JOIN SURVEY_MEMBER m ON s.MIDX = m.MIDX `
            + `WHERE EDATE < NOW() ORDER BY s.SIDX DESC;`, (err, rows) => {
            if(!err) {
                console.log('endlist rows>>>>>', rows);
                res.send(rows);
            } else {
                console.log(`query error : ${err}`);
                res.send(err);
            }
        })
    } catch (error) {

    }
}