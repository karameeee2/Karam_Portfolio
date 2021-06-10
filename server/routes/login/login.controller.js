const db = require('../../dbconnection');

exports.login = async (req, res, next) => {
    const id = req.body.id
    const password = req.body.password
    console.log('id,pw : ',id,password );
    try {
        const result = await db.query(`SELECT ID, PASSWORD, MIDX, NICKNAME FROM SURVEY_MEMBER WHERE ID = "${ id }" AND PASSWORD = "${ password }"`, (err, rows) => {
            return result[0];
            // if(!err) {
            //     res.send(rows);
            // } else {
            //     console.log(`query error : ${err}`);
            //     res.send(err);
            // }
        })
    } catch (err) {
        return err;
    }
}