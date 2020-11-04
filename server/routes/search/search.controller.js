const db = require('../../dbconnection');
const bodyParser = require('body-parser');
const mysql = require('mysql');


exports.searchResult = (req, res, next) => {
    // 검색창에 입력된 검색어  value
    let value = req.query.value;
    
    let progress = `SELECT * FROM SURVEY WHERE (SSUBJECT LIKE '%${value}%' OR SCONTENT LIKE '%${value}%' OR TAG LIKE '%${value}%') AND EDATE > NOW();`;
    let progressSql = mysql.format(progress);
    let end = `SELECT * FROM SURVEY WHERE (SSUBJECT LIKE '%${value}%' OR SCONTENT LIKE '%${value}%' OR TAG LIKE '%${value}%') AND EDATE < NOW();`;
    let endSql = mysql.format(end);
    let notice = `SELECT * FROM SURVEY_NOTICE WHERE NSUBJECT LIKE '%${value}%' OR NCONTENT LIKE '%${value}%';`;
    let noticeSql = mysql.format(notice);
    console.log(req.query.category)

    let resultQuery = progressSql + endSql + noticeSql; // 초기화

    // category 에 따라서 resultQuery 를 변경해준다.
    let category = req.query.category;
    if(!category || category === 'all' ) {
        // 초기화가 되있으므로 변경해주지 않아도됨
    } else if (category === 'subject') {
        // progress, progressSql
        // resultQuery = progressSql + endSql
    } else if (category === 'tag') { 

    }

    db.query(resultQuery, (err, rows) => {
        // console.log('rows:: ',rows);
        if(!err) {
            // console.log('성공');
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
}