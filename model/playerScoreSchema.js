const mongoose = require('mongoose')

const playerScoreSchema = new mongoose.Schema({
    score: {
        type: Number,
        required: true,
    },
    playerId: {
        type: String,
    },
    username: {
        type: String
    }
})

const playerScoreModel = mongoose.model('PlayerScore', playerScoreSchema);

module.exports = playerScoreModel;