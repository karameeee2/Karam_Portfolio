const express = require('express');
const router = express.Router();
const passport = require('passport');

router.get('/', (req, res) => {
    req.logout();
    req.session.save(() => {
        res.redirect('/');
    })
})

module.exports = router;