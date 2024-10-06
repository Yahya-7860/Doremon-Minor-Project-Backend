const mongoose = require('mongoose')

const playerScoreSchema = new mongoose.Schema({
    playerId: {
        type: String,
    },
    score: {
        type: Number,
        required: true,
    },
})

const playerScoreModel = mongoose.model('PlayerScore', playerScoreSchema);

module.exports = playerScoreModel;