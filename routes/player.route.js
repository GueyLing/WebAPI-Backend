const express = require('express');
const Player = require('../models/player.model');
const router = express.Router();
const {getPlayers, getPlayer, updatePlayer, deletePlayer, createPlayer} = require('../controllers/player.controller.js');

router.get('/', getPlayers);
router.get('/:id', getPlayer);
router.put('/:id', updatePlayer);
router.delete('/:id', deletePlayer);
router.post('/', createPlayer);

module.exports = router;