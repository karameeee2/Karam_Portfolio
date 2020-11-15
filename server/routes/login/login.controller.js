const db = require('../../dbconnection');

exports.login = (req, res, next) => {
    const id = req.body.id
    const password = req.body.password
    console.log('id,pw : ',id,password );
    db.query('SELECT ID, PASSWORD, MIDX FROM SURVEY_MEMBER WHERE ID = "admin1@surveyon.com" AND PASSWORD = "admin1"', (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
}