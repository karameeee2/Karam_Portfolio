const db = require('../../dbconnection');

exports.idCheck = (req, res, next) => {
    const id = req.body.id;

    db.query(`SELECT ID FROM SURVEY_MEMBER WHERE ID LIKE '${id}'`, (err, rows) => {
        if(!err) {
            // console.log('id', rows[0]);
            // 아이디가 없으면
            if(!rows[0]) { // 가입 가능
                res.status(200).send()
            } else { // 가입 불가능
                res.status(409).send()
            }
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    });
}