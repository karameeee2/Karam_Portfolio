const db = require('../../dbconnection');

exports.insertJoinSurvey = (req, res, next) => {
    let fixedQuery = 'INSERT INTO SURVEY_COUNT (SIDX, QIDX, AIDX, MIDX, GENDER, BIRTH) VALUES';
}