const db = require('../../mysql2.dbconnection');

exports.insertSurvey = async (req, res, next) => {
    console.log('insert survey,', req.body, req.user);
    // 각종 파라미터 선언
    const ssubject = req.body.ssubject;
    const scontent = req.body.scontent;
    const midx = req.user.MIDX;
    const sdate = req.body.sdate;
    const edate = req.body.edate;
    const tag = req.body.tag;
    let img = req.file;
    let question = req.body.question;
    let answer = req.body.answer;

    question = JSON.parse(question)
    answer = JSON.parse(answer)
    // 커넥션 선언
    let connection;
    
    try {
        connection = await db.getConnection(async conn => conn);

        try {
            connection.beginTransaction();
            img = img.location; // 이미지의 location 값이 db에 필요
            let query = 'INSERT INTO SURVEY (SSUBJECT, SCONTENT, MIDX, SDATE, EDATE, TAG, IMG) ' +
                `VALUES ('${ssubject}', '${scontent}', '${midx}', '${sdate}', '${edate}', '${tag}', '${img}')`;
    
            let results = await connection.query(query);
    
            console.log('11111111111111111',results[0], results[0].insertId);
    
            if (!results[0].insertId) {
                connection.release();
                connection.rollback();
                res.status(500).send();
                return;
            }
    
            let sidx = results[0].insertId;
            let qidxList = [];
    
            for (let i = 0; i < question.length; i++) {
                query = `INSERT INTO SURVEY_QUESTION (SIDX, QUESTION) VALUES ('${sidx}', '${question[i]}')`;
                results = await connection.query(query);
                if (!results[0].insertId) {
                    connection.release();
                    connection.rollback();
                    res.status(500).send();
                    return;
                }
                qidxList.push(results[0].insertId);
            }
    
            console.log('qidxList###################', qidxList);
    
            for (let i = 0; i < qidxList.length; i++) {
                console.log('inser answer', i) // 1
                let qidx = qidxList[i];
                let answerArr = Object.values({ ...answer[i] });
                
                query = `INSERT INTO SURVEY_ANSWER (QIDX, ANSWER) VALUES `;

                for (let j = 0; j < answerArr.length; j++) {
                    query += `('${qidx}', '${answerArr[j]}')`
                    if(answerArr.length !== j+1) query += ','
                }
    
                console.log('answer query', query); // 2
                results = await connection.query(query);
                if (!results[0].insertId) {
                    connection.release();
                    connection.rollback();
                    res.status(500).send();
                    return;
                }
                console.log('insert success', results[0].insertId); // 3
            }

            connection.commit();
            // connection.rollback();
            console.log('now, image upload...', img);

            res.status(200).send();

        } catch (error) {
            console.error('쿼리 돌리는 중 error', error)
        } 
    } catch (error) {
        console.error('failed get connection', error);
    } finally {
        connection.release();
    }
}