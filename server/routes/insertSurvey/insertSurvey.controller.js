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
            `VALUES ('${ssubject}', '${scontent}', '${midx}', '${sdate}', '${edate}', '${tag}', '${img}')`, (insertErr, results, fields) => {
                if(insertErr) {
                    console.error('Insert1 Error >>', insertErr);
                    return res.send(insertErr);
                }
                console.log('results_1 >>', results);
                const sidx = results.insertId;
                const question = req.body.question;
    
                conn.query(`INSERT INTO SURVEY_QUESTION (SIDX, QUESTION) VALUES (${sidx}, ${question})`, (insertErr, results, fields) => {
                    if(insertErr) {
                        console.error('Insert2 Error >>', insertErr);
                        return res.send(insertErr);
                    }
                    console.log('results_2 >>', results);
    
                    const qidx = results.insertId;
                    const answer = req.body.answer;
    
                    // let fixedQuery = `INSERT INTO SURVEY_ANSWER (QIDX, ANSWER) VALUES `;
                    // for(let i = 0; i < )
                    conn.query(`INSERT INTO SURVEY_ANSWER (QIDX, ANSWER) VALUES (${qidx}, ${answer})`, (insertErr, results, fields) => {
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