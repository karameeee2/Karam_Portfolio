const mysql = require('mysql');
require('dotenv').config();
console.log('dbconnection process.env.NODE_ENV: ', process.env.NODE_ENV);
const host = process.env.NODE_ENV === 'development' ? '127.0.0.1' : process.env.DB_HOST;
const dbconnection = mysql.createPool ({
    host: host,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    multipleStatements: true,
});

module.exports = dbconnection;