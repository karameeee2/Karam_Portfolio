const express = require('express');
const router = express.Router();
const controller = require('./login.controller');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy
const db = require('../../dbconnection');

router.post('/', passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect : '/login'
}))

module.exports = router;