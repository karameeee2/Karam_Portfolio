const express = require('express');
const router = express.Router();
const controller = require('./countJoinedUser.controller');

router.get('/', controller.countJoinedUser);

module.exports = router;