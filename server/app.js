const express = require('express');
const session = require('express-session');
const db = require('./dbconnection');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
const routes = require('./routes');
const passport = require('passport');
const passportConfig = require('./config/passport');
const path = require('path');
const clientPath = path.resolve(__dirname, '..', 'client', 'dist')
app.use(express.static(clientPath));

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
let corsOptions = {
    origin: 'https://karameeee.dev',
    optionsSuccessStatus: 200,
    credentials: true
}

app.use(cors(corsOptions));
app.options('*', cors(corsOptions)) // include before other routes

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
app.get('*', (req, res) => {
    res.sendFile(path.resolve(clientPath, 'index.html'))
})


app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

module.exports = app;