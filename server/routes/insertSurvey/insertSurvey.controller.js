const db = require('../../dbconnection');

exports.insertSurvey = (req, res, next) => {
    const ssubject = req.body.ssubject;
    const scontent = req.body.scontent;
    const midx = req.user.MIDX;
    const sdate = req.body.sdate;
    const edate = req.body.edate;
    const tag = req.body.tag;
    const img = req.body.img;

    db.beginTransaction (TranErr => {
        if(TranErr) {
            console.error('Transaction Error >>', TranErr);
            return done(TranErr);
        }

        db.query('INSERT INTO SURVEY (SSUBJECT, SCONTENT, MIDX, SDATE, EDATE, TAG, IMG) '+ 
        `VALUES ('${ssubject}', '${scontent}', '${midx}', '${sdate}', '${edate}', '${tag}', '${img}')`, (insertErr, results, fields) => {
            if(insertErr) {
                console.error('Insert1 Error >>', insertErr);
                return done(insertErr);
            }
            console.log('results_1 >>', results);
            
            const sidx = results.SIDX;
            const question = req.body.question;
            expect(sidx).to.be.above(0);

            db.query(`INSERT INTO SURVEY_QUESTION (SIDX, QUESTION) VALUES (${sidx}, ${question})`, (insertErr, results, fields) => {
                if(insertErr) {
                    console.error('Insert2 Error >>', insertErr);
                    return done(insertErr);
                }
                console.log('results_2 >>', results);

                const qidx = results.QIDX;
                const answer = req.body.answer;
                expect(qidx).to.be.above(1);
                db.query(`INSERT INTO SURVEY_ANSWER (QIDX, ANSWER) VALUES (${qidx}, ${answer})`, (insertErr, results, fields) => {
                    if(insertErr) {
                        console.error('Insert3 Error >>' , insertErr);
                        return done(insertErr);
                    }
                    console.log('results_3 >>', results);
                    db.rollback();
                    done();
                })
            })
        })
    })
    
    db.query('INSERT INTO SURVEY (SSUBJECT, SCONTENT, MIDX, SDATE, EDATE, TAG, IMG) '+ 
    `VALUES ('${ssubject}', '${scontent}', '${midx}', '${sdate}', '${edate}', '${tag}', '${img}')`, (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
    console.log('survey insert success');
}