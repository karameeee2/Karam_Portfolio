const express = require('express');
const router = express.Router();
const controller = require('./noticeDetail.controller');

router.get('/', controller.noticeDetail);

module.exports = router;