const { playerScoreModel } = require("../../model")

const handleGetAllScore = async (req, res) => {
    try {
        const allScores = await playerScoreModel.find()
        if (!allScores) {
            return res.status(404).json({ message: "No Scores Found" })
        }
        res.status(200).json({ message: "scores found", allScores })
    } catch (error) {
        res.status(500).json({ message: "server error", error })
    }
}

module.exports = { handleGetAllScore }