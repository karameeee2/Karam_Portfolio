const db = require('../../dbconnection');

exports.selectAgeCount = (req, res, next) => {
    let qidx = req.query.qidx;
    let aidx = req.query.aidx;

    let answerCount = 
    `SELECT
        COUNT(*) 'TOTAL',
        SUM(AIDX=${aidx}) 'ca${aidx}',
        (SUM(AIDX=${aidx}) / COUNT(*)) * 100 'ca${adix}Rate',
    FROM
        SURVEY_COUNT c WHERE QIDX=${qidx}`;
        // SUM(AIDX=${aidx}) 'ca${aidx}',
        // (SUM(AIDX=${aidx}) / COUNT(*)) * 100 'ca${adix}Rate',
        // 위에 부분이 for문 돌아야함 insertJoinSurvey 참고

    let ageCount = 
    `SELECT 
        c.AIDX,
        COUNT(*) 'TOTAL',
        SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH BETWEEN 10 AND 19, 1, 0)) 'c10',
        (SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH BETWEEN 10 AND 19, 1, 0)) / COUNT(*)) * 100 'c10Rate',
        SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH BETWEEN 20 AND 29, 1, 0)) 'c20',
        (SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH BETWEEN 20 AND 29, 1, 0)) / COUNT(*)) * 100 'c20Rate',
        SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH BETWEEN 30 AND 39, 1, 0)) 'c30',
        (SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH BETWEEN 30 AND 39, 1, 0)) / COUNT(*)) * 100 'c30Rate',
        SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH BETWEEN 40 AND 49, 1, 0)) 'c40',
        (SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH BETWEEN 40 AND 49, 1, 0)) / COUNT(*)) * 100 'c40Rate',
        SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH < 10 OR DATE_FORMAT(NOW(),'%Y') - c.BIRTH > 49, 1, 0)) 'others',
        (SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH < 10 OR DATE_FORMAT(NOW(),'%Y') - c.BIRTH > 49, 1, 0)) / COUNT(*)) * 100 'othersRate'
    FROM 
        SURVEY_COUNT c WHERE c.AIDX=${aidx}`;

    db.query(
        `SELECT 
            c.AIDX,
            COUNT(*) 'TOTAL',
            SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH BETWEEN 10 AND 19, 1, 0)) 'c10',
            (SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH BETWEEN 10 AND 19, 1, 0)) / COUNT(*) * 100) 'c10Rate',
            SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH BETWEEN 20 AND 29, 1, 0)) 'c20',
            (SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH BETWEEN 20 AND 29, 1, 0)) / COUNT(*) * 100) 'c20Rate',
            SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH BETWEEN 30 AND 39, 1, 0)) 'c30',
            (SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH BETWEEN 30 AND 39, 1, 0)) / COUNT(*) * 100) 'c30Rate',
            SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH BETWEEN 40 AND 49, 1, 0)) 'c40',
            (SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH BETWEEN 40 AND 49, 1, 0)) / COUNT(*) * 100) 'c40Rate',
            SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH < 10 OR DATE_FORMAT(NOW(),'%Y') - c.BIRTH > 49, 1, 0)) 'others',
            (SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH < 10 OR DATE_FORMAT(NOW(),'%Y') - c.BIRTH > 49, 1, 0)) / COUNT(*) * 100) 'othersRate'
        FROM 
            SURVEY_COUNT c WHERE c.AIDX=${aidx}`, (err, rows) => {
        if(!err) {
            res.send(rows);
            console.log('countRows::', rows);
        } else {
            console.log(`query error: ${err}`);
            res.send(err);
        }
    })
}

// db.query(
//     `SELECT 
//         c.AIDX,
//         COUNT(*) 'TOTAL',
//         SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH BETWEEN 10 AND 19, 1, 0)) 'c10',
//         (SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH BETWEEN 10 AND 19, 1, 0)) / COUNT(*) * 100) 'c10Rate',
//         SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH BETWEEN 20 AND 29, 1, 0)) 'c20',
//         (SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH BETWEEN 20 AND 29, 1, 0)) / COUNT(*) * 100) 'c20Rate',
//         SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH BETWEEN 30 AND 39, 1, 0)) 'c30',
//         (SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH BETWEEN 30 AND 39, 1, 0)) / COUNT(*) * 100) 'c30Rate',
//         SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH BETWEEN 40 AND 49, 1, 0)) 'c40',
//         (SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH BETWEEN 40 AND 49, 1, 0)) / COUNT(*) * 100) 'c40Rate',
//         SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH < 10 OR DATE_FORMAT(NOW(),'%Y') - c.BIRTH > 49, 1, 0)) 'others',
//         (SUM(IF(DATE_FORMAT(NOW(), '%Y') - c.BIRTH < 10 OR DATE_FORMAT(NOW(),'%Y') - c.BIRTH > 49, 1, 0)) / COUNT(*) * 100) 'othersRate'
//     FROM 
//         SURVEY_COUNT c WHERE c.AIDX=${aidx}`, (err, rows) => {
//     if(!err) {
//         res.send(rows);
//         console.log('countRows::', rows);
//     } else {
//         console.log(`query error: ${err}`);
//         res.send(err);
//     }
// })