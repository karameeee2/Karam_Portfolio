const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 8080;
const cors = require('cors');
const router = require('./routes/router');

// cors허용
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors());
// 라우트 설정을 하나 추가되서 늘어날 때마다 하나의 코드로 처리하는걸 넣으면 좋을거같구
app.get('/', router);
app.get('/getData', router);
app.get('/getMember', router);

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})