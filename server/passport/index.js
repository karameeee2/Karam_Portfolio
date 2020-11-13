const passport = require('passport');
const passportJWT = require('passport-jwt');
const bcrypt = require('bcrypt');
const JWTStrategy = passportJWT.Strategy;
const { ExtractJwt } = passportJWT;
const LocalStrategy = require('passport-local').Strategy
const db = require('../dbconnection');

const LocalStrategyOption = {
    usernameField: 'id',
    passwordField: 'password',
};
const localVerify = async((id, password, done) => {
    let user;
    try {
        user = await ;
    } catch {

    }
})