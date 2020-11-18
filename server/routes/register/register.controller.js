const db = require('../../dbconnection');

exports.register = (req, res, next) => {
    const id = req.body.id;
    const password = req.body.password;
    const name = req.body.name;
    const nickname = req.body.nickname;
    const gender = req.body.gender;
    const birth = req.body.birth;
    db.query('INSERT INTO SURVEY_MEMBER (ID, PASSWORD, NAME, NICKNAME, GENDER, BIRTH) '+ 
    `VALUES ('${id}', '${password}', '${name}', '${nickname}', '${gender}', '${birth}')`, (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
    console.log('insert success');
}