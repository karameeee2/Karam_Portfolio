const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
const routes = require('./routes');

// cors허용
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.use('/', routes);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})

module.exports = app;