const db = require('../../dbconnection');

exports.joinSurveyCheck = async (req, res, next) => {
    console.log(2222);
    try {
        console.log('try' , req.query, req.user, req.karameeee);
        if(!req.user) res.status(409).send()
        let sidx = req.query.sidx;
        let midx = req.user.MIDX;
        console.log(sidx, midx);
        if(!sidx || !midx) res.status(409).send();
        await db.query(`SELECT SIDX, MIDX FROM SURVEY_COUNT WHERE SIDX = ${sidx} AND MIDX = ${midx}`, (err, rows) => {
            // console.log('midx', midx);
            console.log('rows:: ',rows);
            if(!err) {
                // console.log('성공');
                // 일치하는 rows가 없으면
                if(!rows[0]) { // 설문참여가능
                    res.status(200).send();
                } else { // 설문참여불가
                    res.status(409).send();
                }
                // res.send(rows);
            } else {
                console.log(`query error : ${err}`);
                res.send(err);
            }
        })
        // 한컬럼에 해당 설문 번호와 해당 회원 번호가 일치하는게 있으면 목록보기 없으면 제출/돌아가기가 나오게
    } catch (error) {
        
    }
}