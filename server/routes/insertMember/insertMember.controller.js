const express = require('express');
const bodyParser = require('body-parser');
const db = require('../../dbconnection');

exports.insertMember = (req, res, next) => {
    let id = req.body.id;
    let password = req.body.password;
    let name = req.body.name;
    let nickname = req.body.nickname;
    let gender = req.body.gender;
    let birth = req.body.birth;
    db.query('INSERT INTO SURVEY_MEMBER (ID, PASSWORD, NAME, NICKNAME, GENDER, BIRTH) '+ 
    `VALUES ('${id}', '${password}', '${name}', '${nickname}', '${gender}', '${birth}')`, (err, rows) => {
        if(!err) {
            res.send(rows);
        } else {
            console.log(`query error : ${err}`);
            res.send(err);
        }
    })
    console.log('insert success');
}