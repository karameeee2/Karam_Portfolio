const express = require('express');
const router = express.Router();
const controller = require('./insertMember.controller');

router.post('/', controller.insertMember);

module.exports = router;