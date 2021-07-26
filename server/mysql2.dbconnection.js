const mysql = require('mysql2/promise');

console.log('mysql2_dbconnection process.env.NODE_ENV: ', process.env.NODE_ENV);
const host = process.env.NODE_ENV === 'development' ? '127.0.0.1' : 'surveyon.cz9kdiazwbth.ap-northeast-2.rds.amazonaws.com';
const mysql2_dbconnection = mysql.createPool ({
    host: host,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    multipleStatements: true,
});

module.exports = mysql2_dbconnection;