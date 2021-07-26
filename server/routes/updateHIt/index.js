const express = require('express');
const router = express.Router();
const controller = require('./updateHit.controller');

router.get('/', controller.updateHit);

module.exports = router;