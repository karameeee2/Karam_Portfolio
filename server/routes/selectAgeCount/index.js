const express = require('express');
const router = express.Router();
const controller = require('./selectAgeCount.controller');

router.get('/', controller.selectAgeCount);

module.exports = router;