const passport = require('passport');

exports.create = function (req, res) {
    console.log('create')
    passport.authenticate('local', {session: false}, (err, user) => {
        console.log(err, user);
        if (err || !user) {
            return res.status(400).json({
                message: 'Something is not right',
                user   : user
            });
        }
        req.login(user, {session: false}, (err) => {
            if (err) {
                res.send(err);
            }
            // jwt.sign('token내용', 'JWT secretkey')
            const token = jwt.sign(user.toJSON(), '1234');
            return res.json({user, token});
        });
    })(req, res);
};