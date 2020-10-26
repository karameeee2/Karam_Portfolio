const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');
const port = 8080;
const cors = require('cors');

// cors허용
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello React x Node.js');
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})