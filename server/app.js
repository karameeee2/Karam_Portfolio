const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const db = require('./dbconnection');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
const routes = require('./routes');
const passport = require('passport');
const passportConfig = require('./passport');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(session({secret: 'secret code', resave: true, saveUninitialized: false}));
app.use(passport.initialize());
app.use(passport.session());
db;
passportConfig();
// cors허용
app.use(cors());

app.use('/', routes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

module.exports = app;