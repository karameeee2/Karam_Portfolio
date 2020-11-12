const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const Users = require('./user');

module.exports = () => {
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    passport.deserializeUser(id, (user, done) => {
        Users.findById(id, (err, user) => {
            done(null, user);
        });
    });

    passport.use(new LocalStrategy({
        usernameField: 'id',
        passwordField: 'password',
        session: true,
        passReqToCallback: false,
    }, (id, password, done) => {
        Users.findOne({id:id}, (findError, user) => {
            if(findError) return done(findError);
            if(!user) return done(null, false, {message: '존재하지 않는 아이디입니다.'});
            return user.comparePassword(password, (passError, isMatch) => {
                if(isMatch) {
                    return done(null, user);
                }
                return done(null, false, {message: '비밀번호가 일치하지 않습니다.'});
            });
        });
    }));
};