const express = require('express');
const User = require('../models/user.model');
const router = express.Router();
const {getUsers, createUser, login, bookmarkPlayer, isBookmarked, getBookmarkedPlayers} = require('../controllers/user.controller.js');

router.get('/', getUsers);
router.post('/', createUser);
router.post('/login', login);
router.post('/api/users/:userId/bookmark/:playerId', bookmarkPlayer);
router.get('/isBookmarked/users/:userId/bookmark/:playerId', isBookmarked);
router.get('/api/users/:userId/bookmarked-players', getBookmarkedPlayers);

module.exports = router;