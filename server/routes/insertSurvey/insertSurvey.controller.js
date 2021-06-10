const db = require('../../mysql2.dbconnection');

exports.insertSurvey = async (req, res, next) => {
    console.log('insert survey,', req.body, req.user);
    // 각종 파라미터 선언
    const ssubject = req.body.ssubject;
    const scontent = req.body.scontent;
    const midx = req.user.MIDX;
    const sdate = req.body.sdate;
    const edate = req.body.edate;
    const tag = req.body.tag;
    const img = req.body.img;
    const question = req.body.question;
    const answer = req.body.answer;
    // 커넥션 선언
    let connection;

    try {
        connection = await db.getConnection(async conn => conn);

        try {
            connection.beginTransaction();
    
            let query = 'INSERT INTO SURVEY (SSUBJECT, SCONTENT, MIDX, SDATE, EDATE, TAG, IMG) ' +
                `VALUES ('${ssubject}', '${scontent}', '${midx}', '${sdate}', '${edate}', '${tag}', '${img}')`;
    
            let results = await connection.query(query);
    
            console.log('11111111111111111',results[0], results[0].insertId);
    
            if (!results[0].insertId) {
                connection.release();
                connection.rollback();
                res.status(500).send();
                return;
            }
    
            let sidx = results[0].insertId;
            let qidxList = [];
    
            for (let i = 0; i < question.length; i++) {
                query = `INSERT INTO SURVEY_QUESTION (SIDX, QUESTION) VALUES ('${sidx}', '${question[i]}')`;
                results = await connection.query(query);
                if (!results[0].insertId) {
                    connection.release();
                    connection.rollback();
                    res.status(500).send();
                    return;
                }
                qidxList.push(results[0].insertId);
            }
    
            console.log('qidxList###################', qidxList);
    
            /* 
                answer query INSERT INTO SURVEY_ANSWER (QIDX, ANSWER) VALUES ('70', '5-1-1'),('70', '5-1-2'),('70', '5-1-3')
                answer query INSERT INTO SURVEY_ANSWER (QIDX, ANSWER) VALUES ('71', '5-2-1'),('71', '5-2-2')
                answer query INSERT INTO SURVEY_ANSWER (QIDX, ANSWER) VALUES ('72', '5-3-1')
                answer query INSERT INTO SURVEY_ANSWER (QIDX, ANSWER) VALUES ('73', '5-4-1'),('73', '5-4-2'),('73', '5-4-3'),('73', '5-4-4'),('73', '5-4-5')
            */
            for (let i = 0; i < qidxList.length; i++) {
                console.log('inser answer', i) // 1
                let qidx = qidxList[i];
                let answerArr = Object.values({ ...answer[i] });
                
                query = `INSERT INTO SURVEY_ANSWER (QIDX, ANSWER) VALUES `;

                for (let j = 0; j < answerArr.length; j++) {
                    query += `('${qidx}', '${answerArr[j]}')`
                    if(answerArr.length !== j+1) query += ','
                }
    
                console.log('answer query', query); // 2
                results = await connection.query(query);
                if (!results[0].insertId) {
                    connection.release();
                    connection.rollback();
                    res.status(500).send();
                    return;
                }
                console.log('insert success', results[0].insertId); // 3
            }

            connection.commit();
            res.status(200).send();

        } catch (error) {
            console.error('쿼리 돌리는 중 error', error)
        } 
    } catch (error) {
        console.error('failed get connection', error);
    } finally {
        connection.release();
    }





    // db.getConnection((err, conn) => {
    //     if(!conn) {
    //         return next()
    //     }


    //     conn.beginTransaction ((TranErr) => {
    //         if(TranErr) {
    //             console.error('Transaction Error >>', TranErr);
    //             conn.rollback();
    //             return res.send(TranErr);
    //         }

    //         conn.query('INSERT INTO SURVEY (SSUBJECT, SCONTENT, MIDX, SDATE, EDATE, TAG, IMG) '+ 
    //         `VALUES ('${ssubject}', '${scontent}', '${midx}', '${sdate}', '${edate}', '${tag}', '${img}')`, (insertErr, results, fields) => {
    //             if(insertErr) {
    //                 console.error('Insert1 Error >>', insertErr);
    //                 conn.rollback();
    //                 return res.send(insertErr);
    //             }
    //             console.log('results_1 >>', results);

    //             for (let i = 0; i < question.length; i++) {
    //                 console.log('insert question map', i);

    //                 const sidx = results.insertId;
    //                 let fixedQueryQ = `INSERT INTO SURVEY_QUESTION (SIDX, QUESTION) VALUES ('${sidx}', '${question[i]}')`;

    //                 conn.query(fixedQueryQ, (questionInsertError, questionResults, fields) => {
    //                     if (questionInsertError) {
    //                         console.error('Insert2 Error >>', questionInsertError);
    //                         conn.rollback();
    //                         return res.send(questionInsertError);
    //                     }
    //                     console.log('questionResults_2 >>', questionResults);
    //                     console.log('questionResults_2 insertId', questionResults.insertId);

    //                     // answer 
    //                     // 0: {0: "1111", 1: "2222"}
    //                     // 1: {0: "aaaa", 1: "qqq", 2: "ee"}

    //                     const qidx = questionResults.insertId;
    //                     for (let i = 0; i < answer.length; i++) {
    //                         let answerArr = Object.values({ ...answer[i] });
    //                         console.log('answerArr: ',answerArr);
    //                         for (let j = 0; j < answerArr.length; j++) {
    //                             let fixedQueryA = `INSERT INTO SURVEY_ANSWER (QIDX, ANSWER) VALUES ('${qidx}', '${answerArr[j]}')`;
    //                             console.log('fixedA::::::', fixedQueryA)
    //                             conn.query(fixedQueryA, (answerInsertError, answerResults, fields) => {
    //                                 if (answerInsertError) {
    //                                     console.error('Insert3 Error >>', answerInsertError);
    //                                     conn.rollback();
    //                                     return res.send(answerInsertError);
    //                                 }
    //                                 console.log('answerResults_3 >>', answerResults);
    //                             })
    //                         }
    //                     }


    //                 });
    //             }


    //             conn.commit();
    //             console.log('survey insert success');
    //             res.status(200).send();

    //         })
    //     })

    // })
}