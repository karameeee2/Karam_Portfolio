const db = require('../../dbconnection');

exports.insertSurvey = (req, res, next) => {
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

    db.getConnection((err, conn) => {
        if(!conn) {
            return next()
        }


        conn.beginTransaction (TranErr => {
            if(TranErr) {
                console.error('Transaction Error >>', TranErr);
                return res.send(TranErr);
            }
    
            conn.query('INSERT INTO SURVEY (SSUBJECT, SCONTENT, MIDX, SDATE, EDATE, TAG, IMG) '+ 
            `VALUES ('${ssubject}', '${scontent}', ${midx}, '${sdate}', '${edate}', '${tag}', '${img}')`, (insertErr, results, fields) => {
                if(insertErr) {
                    console.error('Insert1 Error >>', insertErr);
                    return res.send(insertErr);
                }
                console.log('results_1 >>', results);
        
                let fixedQueryQ = `INSERT INTO SURVEY_QUESTION (SIDX, QUESTION) VALUES `;
                for (let i = 0; i < question.length; i++) {
                    console.log('insert question map');
                    const sidx = results.insertId;
                    fixedQueryQ += `(${sidx}, '${question[i]}')`;
                    if(question.length !== i+1) fixedQueryQ += ',';
                }
                console.log('fixed::::::',fixedQueryQ)

                conn.query(fixedQueryQ, (insertErr, results, fields) => {
                    if(insertErr) {
                        console.error('Insert2 Error >>', insertErr);
                        return res.send(insertErr);
                    }
                    console.log('results_2 >>', results);
                    console.log('results_2 insertId', results.insertId);
                    console.log('results_2 affectedRows', results.affectedRows);
    
                    // answer 
                    // 0: {0: "1111", 1: "2222"}
                    // 1: {0: "aaaa", 1: "qqq", 2: "ee"}

                    let fixedQueryA = `INSERT INTO SURVEY_ANSWER (QIDX, ANSWER) VALUES `;
                    for(let i = 0; i < answer.length; i++) {
                        const qidx = results.insertId;
                        let answerArr = Object.values({...answer[i]});
                        for (let j = 0; j < answerArr.length; j++) {
                            
                            fixedQueryA += `(${qidx}, '${answerArr[j]}')`;
                            if(answer.length !== i+1) fixedQueryA += ',';
                        }
                    }
                    console.log('fixedA::::::',fixedQueryA)

                    conn.query(fixedQueryA, (insertErr, results, fields) => {
                        if(insertErr) {
                            console.error('Insert3 Error >>' , insertErr);
                            return res.send(insertErr);
                        }
                        console.log('results_3 >>', results);
                        conn.commit();
                        res.send(200);
                    })
                })
            })
        })
        
    })
    console.log('survey insert success');
}