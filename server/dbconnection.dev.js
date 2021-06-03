const mysql = require('mysql');

const dbconnection = mysql.createPool ({
    host: 'localhost',
    port: 3306,
    user: 'karameeee',
    password: 'karam119',
    database: 'surveyon',
    multipleStatements: true,
});

module.exports = dbconnection;