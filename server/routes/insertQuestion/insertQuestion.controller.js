const db = require('../../dbconnection');

exports.insertQuestion = (req, res, next) => {
    db.query('INSERT INTO SURVEY_QUESTION (SIDX, QUESTION) VALUES (6, "질문질문 질문질문 귀찮다")', (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
    console.log('question insert success');
}