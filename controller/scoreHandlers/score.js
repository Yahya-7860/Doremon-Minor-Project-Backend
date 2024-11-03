const { playerScoreModel } = require('../../model')

const handleScore = async (req, res) => {
    const { score, username } = req.body;

    try {
        const scoreByPlyerId = await playerScoreModel.findOne({ playerId: req.playerid })
        if (!scoreByPlyerId) {
            const newScoreChart = await playerScoreModel.create({ playerId: req.playerid, score: score, username: username })
            if (!newScoreChart) {
                return res.status(401).json({ message: `unable to create score chart` })
            }
            res.status(200).json({ message: `score chart created for player ${req.playerid}`, newScoreChart })
        }
        else {
            const updateScoreChart = await playerScoreModel.findOneAndUpdate({ playerId: req.playerid }, { score }, { new: true });
            if (!updateScoreChart) {
                return res.status(401).json({ message: "unable to update score chart" })
            }
            res.status(200).json({ message: `score chart updated for player ${req.playerid}`, updateScoreChart })
        }
    } catch (error) {
        res.status(500).json({ message: "server error", error })
    }
}

module.exports = handleScore;