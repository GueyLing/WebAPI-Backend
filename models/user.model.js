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
    }
});
const User = mongoose.model('users', userSchema);

module.exports = User;