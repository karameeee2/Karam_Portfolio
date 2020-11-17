const db = require('../../dbconnection');

exports.selectEndList = async (req, res, next) => {
    try{
        await db.query('SELECT s.*, m.NICKNAME FROM SURVEY s LEFT JOIN SURVEY_MEMBER m ON s.MIDX = m.MIDX WHERE EDATE < NOW() ORDER BY s.SIDX DESC', (err, rows) => {
            if(!err) {
                res.send(rows);
            } else {
                console.log(`query error : ${err}`);
                res.send(err);
            }
        })
    } catch (error) {

    }
}