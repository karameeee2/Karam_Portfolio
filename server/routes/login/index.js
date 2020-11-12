const express = require('express');
const router = express.Router();
const controller = require('./login.controller');
const passport = require('passport');

// router.post('/', controller.login);
router.post('/', passport.authenticate('local', {
    failureRedirect: '/login'
}), (req, res) => {
    res.redirect('/')
});

module.exports = router;