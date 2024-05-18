// externalAPI.route.js
const express = require('express');
const router = express.Router();
const { getExternalData, getNBAPlayerInfo, getNBANewsInfo } = require('../controllers/externalAPI.controller');

router.get('/', getExternalData);
router.get('/:id', getNBAPlayerInfo);
router.get('/news/:id', getNBANewsInfo);

module.exports = router;