const db = require('../../dbconnection');

exports.insertSurvey = (req, res, next) => {
    db.query('INSERT INTO SURVEY (SSUBJECT, SCONTENT, MIDX, SDATE, EDATE, TAG) '+ 
    'VALUES ("설문 INSERT 테스트", "설문이 디비에 잘 들어가는지 확인하는 중....", 4, "2020/10/29", "2020/11/24", "태그1, 태그2, 태그3, 태그4")', (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
    console.log('survey insert success');
}