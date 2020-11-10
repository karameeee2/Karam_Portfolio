const db = require('../../dbconnection');
const mysql = require('mysql');

exports.selectQnA = async (req, res, next) => {
    if(!req.query.sidx) res.status(400).render('error');
    console.log(req.query.sidx);

    // let question = `SELECT q.*, s.SIDX FROM SURVEY_QUESTION q LEFT JOIN SURVEY s ON q.SIDX = s.SIDX WHERE q.SIDX = ${req.query.sidx};`;
    // let questionSql = mysql.format(question);
    // let answer = `SELECT a.*, q.QIDX FROM SURVEY_ANSWER a INNER JOIN SURVEY_QUESTION q ON a.QIDX = q.QIDX ` + 
    // `INNER JOIN SURVEY s ON q.SIDX = s.SIDX WHERE q.SIDX = ${req.query.sidx};`;
    // let answerSql = mysql.format(answer);
    // db.query(questionSql + answerSql, (err, rows) => {
    //     console.log('rows:: ',rows);
    //     if(!err) {
    //         res.send(rows);
    //         console.log('success');
    //     } else {
    //         console.log(`query error : ${err}`);
    //         res.send(err);
    //     }
    // })
    db.query(`SELECT a.ANSWER, q.QUESTION FROM SURVEY_ANSWER a INNER JOIN SURVEY_QUESTION q ON a.QIDX = q.QIDX INNER JOIN SURVEY s ON q.SIDX = s.SIDX WHERE s.SIDX = ${req.query.sidx};`, (err, rows) => {
        console.log('rows:: ',rows);
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })

    








    // let query = `SELECT * FROM SURVEY_QUESTION WHERE SIDX=${req.query.sidx}`;

    // await db.query(query, async (err, rows) => {
    //     console.log('rows:: ', rows);
        
    //     let result = [];
        
    //     if (!err) {
    //         let questions = rows;

    //         /* goal: [
    //             {
    //                 QIDX: 9,
    //                 QUESTION: ',
    //                 SIDX: 3,
    //                 ANSWER: [
    //                     {
    //                         AIDX: 24, QIDX: 9, ANSWER: '
    //                     }
    //                 ]
    //             }
    //         ] 

    //         // 흠 애갸. 데이터는 이제 맞게 세팅이되는데 디비동기화 작업만해주묜대겟다
    //         // 지금문제가 쿼리 다돌고 난 후 결과물을 줘야하는데 question 만 찾은채로 응답이 가버려서 동기화하는거 해야할고같아
    //         // 함 찾아보케
    //         // 저런식으로 뽑는고 이해되지??우웅 ㅇㅅㅇ
    //         // 서버에서 저렇게까진 세팅을 해주고 보내야하는데 기다리질않네.
            
    //         애갸.. 내가 하려는 로직이 어떤건지는 알겟디??
    //         위에 저 goal 의 형태로 만들어서 보내주묜
    //         프론트에서는 questionList map 을 돌리구
    //         그 안에 Answer 의 map 을 돌리묜 될고같은데
    //         쥐금 디비가 찾아주면 서버가 보내야하는데 디비가 찾기전에 서버가 보내부리네..
    //         사실 이렇게 for문돌려서 쿼리를 여러번날리는거보다 한번의 쿼리로 다뽑아내는게 좋지만,, 그게 힘두니까 이렇게 뽑아쳐
    //         왜 아무고토 안나오쥐
    //         저기 result.push(questions[i]) 를 마치고 result를 반환해야되는데 세팅되기 전에 반환해부리네... 서버로그보면 형태는 제대로 세팅이 되는고같은데
    //         */
    //        // 훔.. 아니묘
    //         for (let i = 0; i < questions.length; i++) {   
    //             let answerQuery = `SELECT * FROM SURVEY_ANSWER WHERE QIDX=${questions[i].QIDX}`
    //             questions[i].ANSWER = [];

    //             await db.query(answerQuery, async (aErr, aRows) => {
    //                 if(!err) {
    //                     for (let j = 0; j < aRows.length; j++) {
    //                         questions[i].ANSWER.push(aRows[j])
    //                     }
    //                     await result.push(questions[i]);
    //                     console.log('최종',result)
    //                 } else {
    //                     console.log(`query error : ${err}`);
    //                     res.send(err);            
    //                 }
    //             })
                
    //         }

    //         res.send(result);
    //     } else {
    //         console.log(`query error : ${err}`);
    //         res.send(err);
    //     }
    // })
}
