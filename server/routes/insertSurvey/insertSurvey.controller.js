const db = require('../../dbconnection');
const {promisify} = require('util');
exports.insertSurvey = async(req, res, next) => {
    console.log('insert survey,', req.body,req.user);
    const ssubject = req.body.ssubject;
    const scontent = req.body.scontent;
    const midx = req.user.MIDX;
    const sdate = req.body.sdate;
    const edate = req.body.edate;
    const tag = req.body.tag;
    const img = req.body.img;
    const question = req.body.question;
    const answer = req.body.answer;

    console.log('midx>>>>>', midx);

    db.getConnection((err, conn) => {
        if(!conn) {
            return next()
        }


        conn.beginTransaction ((TranErr) => {
            if(TranErr) {
                console.error('Transaction Error >>', TranErr);
                conn.rollback();
                return res.send(TranErr);
            }
    
            conn.query('INSERT INTO SURVEY (SSUBJECT, SCONTENT, MIDX, SDATE, EDATE, TAG, IMG) '+ 
            `VALUES ('${ssubject}', '${scontent}', '${midx}', '${sdate}', '${edate}', '${tag}', '${img}')`, (insertErr, results, fields) => {
                if(insertErr) {
                    console.error('Insert1 Error >>', insertErr);
                    conn.rollback();
                    return res.send(insertErr);
                }
                console.log('results_1 >>', results);
                
                for (let i = 0; i < question.length; i++) {
                    console.log('insert question map', i);

                    const sidx = results.insertId;
                    let fixedQueryQ = `INSERT INTO SURVEY_QUESTION (SIDX, QUESTION) VALUES ('${sidx}', '${question[i]}')`;

                    conn.query(fixedQueryQ, (questionInsertError, questionResults, fields) => {
                        if (questionInsertError) {
                            console.error('Insert2 Error >>', questionInsertError);
                            conn.rollback();
                            return res.send(questionInsertError);
                        }
                        console.log('questionResults_2 >>', questionResults);
                        console.log('questionResults_2 insertId', questionResults.insertId);
                        console.log('questionResults_2 affectedRows', questionResults.affectedRows);

                        // answer 
                        // 0: {0: "1111", 1: "2222"}
                        // 1: {0: "aaaa", 1: "qqq", 2: "ee"}

                        const qidx = questionResults.insertId;
                        for (let i = 0; i < answer.length; i++) {
                            let answerArr = Object.values({ ...answer[i] });
                            console.log('answerArr: ',answerArr);
                            for (let j = 0; j < answerArr.length; j++) {
                                let fixedQueryA = `INSERT INTO SURVEY_ANSWER (QIDX, ANSWER) VALUES ('${qidx}', '${answerArr[j]}')`;
                                console.log('fixedA::::::', fixedQueryA)
                                conn.query(fixedQueryA, (answerInsertError, answerResults, fields) => {
                                    if (answerInsertError) {
                                        console.error('Insert3 Error >>', answerInsertError);
                                        conn.rollback();
                                        return res.send(answerInsertError);
                                    }
                                    console.log('answerResults_3 >>', answerResults);
                                })
                            }
                        }

                        conn.commit();
                        console.log('survey insert success');
                        res.status(200).send();

                    });
                }
                
            })
        })
        
    })
}