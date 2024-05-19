// externalAPI.route.js
const express = require('express');
const router = express.Router();
const { getExternalData, getNBAPlayerInfo, getNBANewsInfo } = require('../controllers/externalAPI.controller');
const ensureToken = require('../tokenMiddleware.js');
const verifyToken = require('../tokenMiddleware.js');

router.get('/',  ensureToken, verifyToken, getExternalData);
router.get('/:id',  ensureToken, verifyToken, getNBAPlayerInfo);
router.get('/news/:id',  ensureToken, verifyToken, getNBANewsInfo);

module.exports = router;