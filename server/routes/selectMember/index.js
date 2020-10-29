const express = require('express');
const router = express.Router();
const controller = require('./selectMember.controller');

router.get('/', controller.selectMember);

module.exports = router;