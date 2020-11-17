const express = require('express');
const router = express.Router();
const controller = require('./selectEndEach.controller');

router.get('/', controller.selectEndEach);

module.exports = router;