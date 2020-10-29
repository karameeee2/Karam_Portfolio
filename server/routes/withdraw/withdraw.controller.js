const db = require('../../dbconnection');

exports.withdraw = (req, res, next) => {
    db.query('DELETE FROM SURVEY_MEMBER WHERE MIDX = 4', (err, rows) => { // 외래키 참조때문에 삭제가 안됨. 테이블 다시봐야할듯
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
}