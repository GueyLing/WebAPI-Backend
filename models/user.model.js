const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
    },
    password: {
        type: String,
    },
    role: {
        type: String,
    },
    bookmarkedPlayers: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Player' }],
});
const User = mongoose.model('users', userSchema);

module.exports = User;