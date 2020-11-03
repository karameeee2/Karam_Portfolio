const db = require('../../dbconnection');
const bodyParser = require('body-parser');
const mysql = require('mysql');


exports.searchResult = (req, res, next) => {
    // 검색창에 입력된 검색어  value
    //let value = req.body.typeSearch.value;
    
    // 
    let progress = 'SELECT * FROM SURVEY WHERE SSUBJECT LIKE "%Lorem%" OR SCONTENT LIKE "%Lorem%" OR TAG LIKE "%Lorem%"';
    let progressSql = mysql.format(progress);
    let notice = 'SELECT * FROM SURVEY_NOTICE WHERE NSUBJECT LIKE "%1914%" OR NCONTENT LIKE "%of%"';
    let noticeSql = mysql.format(notice);
    
    db.query(progressSql + noticeSql, (err, rows) => {
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