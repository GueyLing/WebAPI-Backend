const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
    },
    player_id: Number,
    image_url: String,
});

const Player = mongoose.model('players', playerSchema);

module.exports = Player;