const express = require('express');
const router = express.Router();
const passport = require('passport');

// 처음 세션에 집어넣을때
passport.serializeUser((user,done) => {
    console.log('done',user, user.id, user.password)
    // 브라우저 cookie 에 세션을 넣어주고,
    // sessions 폴더에(서버에있는) 세션파일이 생성.
    done(null, user.id)
});
// 재접속시 (세션유지용)
passport.deserializeUser((id, done) => {
    console.log('deserial', id)
    done(null, id);
})

router.post('/', passport.authenticate('local-login', {
    failureRedirect : '/login',
}), (req, res) => {
    req.session.save(() => {
        if(req.user){
            // return res.redirect('/' + req.user.id );
            // console.log('req.user::', req.user);
            return res.redirect(200, '/');
        }
        return res.redirect('/login');
    })
})


module.exports = router;