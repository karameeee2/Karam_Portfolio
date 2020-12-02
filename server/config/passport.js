const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const db = require('../dbconnection');

module.exports = () => {
    // login
    passport.use('local-login', new LocalStrategy({
        usernameField: 'id',
        passwordField: 'password'
    },
        async function (id, password, done) {
            console.log(id, password)
            await db.query(`SELECT ID, PASSWORD FROM SURVEY_MEMBER WHERE ID = "${id}" AND PASSWORD = "${password}"`, (err, rows) => {
                if (!err) {
                    console.log('rows', rows);
                    if (!rows || rows.length <= 0) {
                        return done(null, false, {
                            message: '일치하는 사용자가 없습니다.'
                        })
                    } else {

                        return done(null, rows[0])
                    }
                } else {
                    return done(null, err)
                }
            })
        }
    ))

    // register
    passport.use('local-register', new LocalStrategy({
        usernameField: 'id',
        passwordField: 'password'
    }, 
        async function(id, password, name, nickname, gender, birth, done) {
            await db.query('INSERT INTO SURVEY_MEMBER (ID, PASSWORD, NAME, NICKNAME, GENDER, BIRTH) '+ 
            `VALUES ("${id}", "${password}", "${name}", "${nickname}", "${gender}", "${birth}")`, (err, rows) => {
                if(!err) {
                    console.log('rows', rows);
                    return done(null, rows[0]);
                } else {
                    return done(null, err);
                }
            })
        }
    ))
}