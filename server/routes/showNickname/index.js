const express = require('express');
const router = express.Router();
const controller = require('./showNickname.controller');

router.post('/', controller.showNickname);

module.exports = router;