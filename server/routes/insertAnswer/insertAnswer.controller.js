const db = require('../../dbconnection');

exports.insertAnswer = (req, res, next) => {
    const qidx = req.query.qidx;
    const answer = req.body.answer;

    db.query(`INSERT INTO SURVEY_ANSWER (QIDX, ANSWER) VALUES (${qidx}, ${answer})`, (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
    console.log('answer insert success');
}