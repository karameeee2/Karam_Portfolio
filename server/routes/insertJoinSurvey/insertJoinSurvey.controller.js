const db = require('../../dbconnection');

exports.insertJoinSurvey = (req, res, next) => {
    const sidx = req.body.sidx;
    const checkedList = req.body.checkedList;
    const midx = req.user.MIDX;
    const gender = req.user.GENDER;
    const birth = req.user.BIRTH;

    console.log('insertJoinSurvey:', sidx, midx, gender, birth, checkedList);

    
    let fixedQuery = `INSERT INTO SURVEY_COUNT (SIDX, QIDX, AIDX, MIDX, ANSWER, GENDER, BIRTH) VALUES `;
    for (let i = 0; i < checkedList.length; i++) {
        let qidx = checkedList[i].qidx;
        let aidx = checkedList[i].aidx;
        fixedQuery += `(${sidx}, ${qidx}, ${aidx}, ${midx}, '${gender}', '${birth}')`
        if(checkedList.length !== i+1) fixedQuery += ','
    }

    db.query(fixedQuery, (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
}