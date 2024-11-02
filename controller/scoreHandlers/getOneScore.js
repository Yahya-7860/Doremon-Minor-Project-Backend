const { playerScoreModel } = require("../../model")

const handleGetOneScore = async (req, res) => {
    const playerid = req.params.playerid
    try {
        const OneScore = await playerScoreModel.findOne({ playerId: playerid })
        if (!OneScore) {
            const score = 0;
            return res.status(200).json({ message: "score not found", score })
        }
        const score = OneScore.score;
        res.status(200).json({ message: "score found", score })
    } catch (error) {
        res.status(500).json({ message: "server error", error })
    }
}

module.exports = handleGetOneScore;