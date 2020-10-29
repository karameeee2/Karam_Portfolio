const db = require('../../dbconnection');

exports.insertAnswer = (req, res, next) => {
    db.query('INSERT INTO SURVEY_ANSWER (QIDX, ANSWER) VALUES (16, "답변답변 답변답변 랄라")', (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
    console.log('answer insert success');
}