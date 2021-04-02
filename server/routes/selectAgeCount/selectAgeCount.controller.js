const db = require('../../dbconnection');
const util = require('util')

exports.selectAgeCount = async (req, res, next) => {
    const qidx = req.query.qidx;
    const aidx = req.query.aidx;
    
    // 참고
    // https://codeburst.io/node-js-mysql-and-async-await-6fb25b01b628
    try {
        let result = {}; // to client
    
        let anwserQuery = 
        `SELECT
            COUNT(*) 'caTotal',
            SUM(AIDX=${aidx}) 'ca${aidx}',
            (SUM(AIDX=${aidx}) / COUNT(*)) * 100 'ca${aidx}Rate'
        FROM
            SURVEY_COUNT c WHERE QIDX=${qidx}`;
            console.log('qidx',qidx, 'aidx',aidx);
        let totalResult = await util.promisify(db.query).call(db, anwserQuery)
    
        result = {...totalResult[0]}
        
        let ageQuery = 
        `SELECT 
            c.AIDX,
            COUNT(*) 'cTotal',
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
    
        let ageResult = await util.promisify(db.query).call(db, ageQuery)

        result = {...result, ...ageResult[0] }
        console.log('selectAgeCount result', result)
        res.send(result);

    } catch (error) {
        console.log('selectAgeCount', error),
        res.send(error)
    } finally {
          
    }
}
