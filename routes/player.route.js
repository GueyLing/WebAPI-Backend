const express = require('express');
const Player = require('../models/player.model');
const router = express.Router();
const {getPlayers, getPlayer, updatePlayer, deletePlayer, createPlayer} = require('../controllers/player.controller.js');
const ensureToken = require('../tokenMiddleware.js');
const verifyToken = require('../tokenMiddleware.js');


router.get('/', ensureToken, verifyToken, getPlayers);
router.get('/:id',  ensureToken, verifyToken, getPlayer);
router.put('/:id',  ensureToken, verifyToken, updatePlayer);
router.delete('/:id',  ensureToken, verifyToken, deletePlayer);
router.post('/',  ensureToken, verifyToken, createPlayer);

module.exports = router;