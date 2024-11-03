const { playerScoreModel } = require("../../model");


const handleDeletePlayerScoreChart = async (req, res) => {
    const { id } = req.query;

    try {
        const deletedScoreChart = await playerScoreModel.deleteOne({ playerId: id })
        if (!deletedScoreChart) {
            return res.status(401).json({ message: "score chart not found" })
        }
        res.status(200).json({ message: "score chart deleted" })
    } catch (error) {
        res.status(500).json({ message: "server error", error })
    }

}

module.exports = { handleDeletePlayerScoreChart };