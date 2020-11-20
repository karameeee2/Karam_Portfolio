const express = require('express');
const router = express.Router();
const passport = require('passport');

router.post('/', passport.authenticate('local', {
    failureRedirect : '/login',
}), (req, res) => {
    req.session.save(() => {
        res.redirect('/');
    })
})

module.exports = router;