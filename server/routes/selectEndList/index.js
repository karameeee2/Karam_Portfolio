const express = require('express');
const router = express.Router();
const controller = require('./selectEndList.controller');

router.get('/', controller.selectEndList);

module.exports = router;