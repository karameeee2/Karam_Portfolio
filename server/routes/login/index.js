const express = require('express');
const router = express.Router();
const controller = require('./login.controller');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const db = require('../../dbconnection');
const passportConfig = require('../../user');

// router.post('/', controller.login);
// router.post('/', passport.authenticate('local', {
//     failureRedirect: '/login'
// }), (req, res) => {
//     res.redirect('/')
// });
// router.post('/', (req, res, next) => {
//     const id = req.body.id;
//     const password = req.body.password;
//     console.log('id', id, 'password', password);

//     //////////
//     // passport.use(new LocalStrategy({
//     //     usernameField: 'ID',
//     //     passwordField: 'PASSWORD'
//     // },
//     // function (id, password, done) {
//     //     return db.query(`SELECT ID, PASSWORD, MIDX FROM SURVEY_MEMBER WHERE ID = ${id} AND PASSWORD = ${password}`, (err, rows) => {
//     //         console.log('000', id, password)
//     //         if(!err) {
//     //             console.log(11)
//     //             res.send(rows);
//     //         } else {
//     //             console.log(22)
//     //             console.log(`query error : ${err}`);
//     //             res.send(err);
//     //         }
//     //     })
//     //     .then(user => {
//     //         if(!user) {
//     //             return done(null, false, {message: 'Incorrect id or password'});
//     //         }
//     //         return done(null, user, {message: 'Logged In Successfully'});
//     //     })
//     //     .catch(err => done(err));
//     // }));
    

// })
router.post('/', passportConfig.create)

module.exports = router;