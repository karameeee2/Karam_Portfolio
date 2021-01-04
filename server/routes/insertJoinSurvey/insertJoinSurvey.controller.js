const db = require('../../dbconnection');

exports.insertJoinSurvey = (req, res, next) => {
    const sidx = req.body.sidx;
    const qidx = req.body.qidx;
    const aidx = req.body.aidx;
    const midx = req.body.midx;
    const gender = req.body.gender;
    const birth = req.body.birth;

    console.log('insertJoinSurvey:', sidx, qidx, aidx, midx, gender, birth);

    let fixedQuery = 'INSERT INTO SURVEY_COUNT (SIDX, QIDX, AIDX, MIDX, GENDER, BIRTH) VALUES ';

    // for(fixedQuery += `('${sidx}', )`)
}