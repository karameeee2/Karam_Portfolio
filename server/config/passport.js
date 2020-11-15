const passport = require('passport');
const passportJWT = require('passport-jwt');
const JWTStrategy = passportJWT.Strategy;
const ExtractJWT = passportJWT.ExtractJwt;
const LocalStrategy = require('passport-local').Strategy
const UserModel = require('../routes/login/login.controller');
const db = require('../dbconnection');

module.exports = () => {
    console.log('asdfasdf')
    // 등록
    passport.use(new LocalStrategy({
        usernameField: 'ID',
        passwordField: 'PASSWORD'
    },
    function (id, password, done) {
        console.log('000', id, password)
        return db.query('SELECT ID, PASSWORD, MIDX FROM SURVEY_MEMBER WHERE ID = "admin1@surveyon.com" AND PASSWORD = "admin1"', (err, rows) => {
            if(!err) {
                console.log(11)
                res.send(rows);
            } else {
                console.log(22)
                console.log(`query error : ${err}`);
                res.send(err);
            }
        })
        .then(user => {
            if(!user) {
                return done(null, false, {message: 'Incorrect id or password'});
            }
            return done(null, user, {message: 'Logged In Successfully'});
        })
        .catch(err => done(err));
    }));

    // 토큰발급..?
    passport.use(new JWTStrategy({
        jwtFromRequest: ExtractJWT.fromAuthHeaderAsBearerToken(),
        secretOrKey : '1234'
    },
    function (jwtPayload, done) {
        console.log('jwtPayload', jwtPayload);
        // return UserModel.findOneById(jwtPayload.id)
        // .then(user => {
        //     return done(null, user);
        // })
        // .catch(err => {
        //     return done(err);
        // })
    }));
}