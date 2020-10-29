const express = require('express');
const router = express.Router();
const controller = require('./insertMember.controller');

router.get('/', controller.insertMember);

module.exports = router;