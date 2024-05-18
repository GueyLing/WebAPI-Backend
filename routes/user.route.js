const express = require('express');
const User = require('../models/user.model');
const router = express.Router();
const {getUsers, createUser, login} = require('../controllers/user.controller.js');

router.get('/', getUsers);
router.post('/', createUser);
router.post('/login', login);

module.exports = router;