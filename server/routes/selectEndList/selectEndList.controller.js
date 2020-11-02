const db = require('../../dbconnection');

exports.selectEndList = async (req, res, next) => {
    try{
        await db.query('SELECT * FROM SURVEY WHERE EDATE < NOW()', (err, rows) => {
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