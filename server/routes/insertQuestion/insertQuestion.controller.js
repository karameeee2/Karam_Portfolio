const db = require('../../dbconnection');

exports.insertQuestion = (req, res, next) => {
    const sidx = req.query.sidx;
    const question = req.body.question;

    db.query(`INSERT INTO SURVEY_QUESTION (SIDX, QUESTION) VALUES (${sidx}, ${question})`, (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
    console.log('question insert success');
}