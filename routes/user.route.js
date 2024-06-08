const express = require('express');
const User = require('../models/user.model');
const router = express.Router();
const {getUsers, createUser, login, bookmarkPlayer, isBookmarked} = require('../controllers/user.controller.js');

router.get('/', getUsers);
router.post('/', createUser);
router.post('/login', login);
router.post('/api/users/:userId/bookmark/:playerId', bookmarkPlayer);
router.get('/isBookmarked/users/:userId/bookmark/:playerId', isBookmarked);

module.exports = router;