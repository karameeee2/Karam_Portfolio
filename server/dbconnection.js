const mysql = require('mysql');

console.log('dbconnection process.env.NODE_ENV: ', process.env.NODE_ENV);
const host = process.env.NODE_ENV === 'development' ? '127.0.0.1' : 'surveyon.cz9kdiazwbth.ap-northeast-2.rds.amazonaws.com';
const dbconnection = mysql.createPool ({
    host: host,
    port: 3306,
    user: 'karameeee',
    password: 'karam119',
    database: 'surveyon',
    multipleStatements: true,
});

module.exports = dbconnection;