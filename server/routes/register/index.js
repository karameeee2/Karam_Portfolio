const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/', passport.authenticate('local', {
    failureRedirect : '/register',
}), (req, res) => {
    res.redirect('/login');
});

module.exports = router;