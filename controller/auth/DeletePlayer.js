const { userModel } = require("../../model");

const handleDeletePlayer = async (req, res) => {
    const { id } = req.query;
    try {
        const deletedPlayer = await userModel.findByIdAndDelete(id)
        if (!deletedPlayer) {
            return res.status(404).json({ message: "player not valid" })
        }
        res.status(200).json({ message: "player deleted" })
    } catch (error) {
        res.status(500).json({ message: "server error" }, error)
    }
}

module.exports = handleDeletePlayer;