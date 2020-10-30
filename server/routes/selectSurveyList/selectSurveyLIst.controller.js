const db = require('../../dbconnection');

exports.selectSurveyList = async (req, res, next) => {
    try {
        await db.query('SELECT * FROM SURVEY', (err, rows) => {
            if(!err) {
                res.send(rows);
                return;
            } else {
                console.log(`query error : ${err}`);
                res.send(err);
                return;
            }
        })

        // db.release(); 
    } catch (error) {
        
    }
}