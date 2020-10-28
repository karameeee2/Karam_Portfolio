const express = require('express');
const router = express.Router();
const controller = require('./noticeList.controller');

router.get('/', controller.noticeList);

module.exports = router;