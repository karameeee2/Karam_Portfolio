const db = require('../../dbconnection');

exports.insertMember = (req, res, next) => {
    db.query('INSERT INTO SURVEY_MEMBER (ID, PASSWORD, NAME, NICKNAME, GENDER, BIRTH) '+ 
    'VALUES ("asdf1234@naver.com", "asdf1234", "김이박", "바기김", "M", "1986/01/30")', (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
    console.log('insert success');
}