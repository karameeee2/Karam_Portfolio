const db = require('../../dbconnection');

exports.idCheck = (req, res, next) => {
    const id = req.body.id;

    db.query(`SELECT ID FROM SURVEY_MEMBER WHERE ID LIKE '${id}'`, (err, rows) => {
        if(!err) {
            // 아이디가 없으면
            console.log('id', rows[0]);

            if(!rows[0]) {
                res.status(200).send()
            } else {
                res.status(409).send()
            }
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    });
}