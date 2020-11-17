const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/', passport.authenticate('local', {
    failureRedirect : '/login',
}), (req, res) => {
    res.redirect('/login/success');
})

module.exports = router;