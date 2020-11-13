const passport = require('passport');

passport.authenticate('local', (err, user, info) => {
    if(err) {
        console.error(err);
        next(err);
    }

    if(info) {
        return res.status(400).send(info.reason);
    }
    return req.login(user, (loginErr) => {
        if(loginErr) {
            return next(loginErr);
        }
        const filteredUser = Object.assign({}, user);
        delete filteredUser.password;
        return res.json(filteredUser);
    });
})(req, res, next);