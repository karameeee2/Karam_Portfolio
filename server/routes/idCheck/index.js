const express = require('express');
const router = express.Router();
const controller = require('./idCheck.controller');

router.post('/', controller.idCheck);

module.exports = router;