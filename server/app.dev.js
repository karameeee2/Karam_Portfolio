const express = require('express');
const session = require('express-session');
const db = require('./dbconnection.dev');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
const routes = require('./routes');
const passport = require('passport');
const passportConfig = require('./config/passport');

app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(
    session({
        secret: 'karameeee', 
        resave: true, 
        saveUninitialized: false,
        cookie: {
            httpOnly: false,
            secure: false
        }
    })
);
    
db;
// cors허용
// app.use(cors({ credentials: true, origin: 'https://karameeee.dev' }));
// app.options('*', cors()) // include before other routes
app.use(cors({credential: true}));

passportConfig(passport);

// passport
app.use(passport.initialize());
app.use(passport.session());
// app.use(flash());

// 처음 세션에 집어넣을때
passport.serializeUser((user, done) => {
    console.log('done',user, user.id, user.password)
    // 브라우저 cookie 에 세션을 넣어주고,
    // sessions 폴더에(서버에있는) 세션파일이 생성.
    done(null, user)
});
// 재접속시 (세션유지용)
passport.deserializeUser((id, done) => {
    console.log('deserial', id)
    done(null, id);
})


// routes
app.use('/', routes);


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

module.exports = app;