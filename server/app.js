const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const db = require('./dbconnection');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
const routes = require('./routes');
const passport = require('passport');
// require('dotenv').config();
app.use(express.static('public'));
// app.use(express.static)
app.use(express.json());
app.use(express.urlencoded({extended:true}));
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended:true}));
app.use(session({secret: 'karameeee', resave: true, saveUninitialized: false}));
db;

// cors허용
app.use(cors({ credentials: true, origin: 'http://localhost:3000' }));

const passportConfig = require('./config/passport');
passportConfig();

// 처음 세션에 집어넣을때
passport.serializeUser((user,done) => {
    console.log('done',user, user.id, user.password)
    // 브라우저 cookie 에 세션을 넣어주고,
    // sessions 폴더에(서버에있는) 세션파일이 생성.
    return done(null, user.id)
});
// 재접속시 (세션유지용)
passport.deserializeUser((user,done) => {
    console.log('deserial', user)
    done(null, user);
})

// passport
app.use(passport.initialize());
app.use(passport.session());

// routes
app.use('/', routes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

module.exports = app;