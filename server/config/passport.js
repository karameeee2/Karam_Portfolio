const passport = require('passport');
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = require('passport-local').Strategy
const UserModel = require('../routes/login/login.controller');
const db = require('../dbconnection');

module.exports = () => {
    passport.use(new LocalStrategy({
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
}