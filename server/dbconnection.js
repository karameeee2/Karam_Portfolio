const mysql = require('mysql');

const dbconnection = mysql.createPool ({
    host: 'surveyon.cz9kdiazwbth.ap-northeast-2.rds.amazonaws.com',
    port: 3306,
    user: 'karameeee',
    password: 'karam119',
    database: 'surveyon',
    multipleStatements: true,
});

module.exports = dbconnection;