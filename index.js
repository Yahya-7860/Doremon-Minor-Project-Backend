require('dotenv').config()
const express = require("express");
const cors = require('cors')
const app = express();
const mongoose = require('mongoose');
const { registerRouter, loginRouter, scoreRouter, getOneScoreRouter, allScoreRouter, deletePlayerRouter, deletePlayerScoreChartRouter } = require('./routes');
const { hashedPassword, jwtAuthentication } = require("./middleware")

const PORT = process.env.PORT || 3000;
const DB_STRING = process.env.DB_STRING;

const dbConnection = async () => {
    try {
        await mongoose.connect(DB_STRING)
        console.log("Database Connected Successfully")
    } catch (error) {
        console.log("An error occured while connecting databse", error)
    }
}
dbConnection();
app.listen(PORT, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log(`Server started running on port ${PORT}`)
    }
})
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

app.use(cors())
app.use('/user', loginRouter)
app.use('/player', allScoreRouter)
app.use('/user', hashedPassword, registerRouter)
app.use('/player', jwtAuthentication, scoreRouter)
app.use('/player', jwtAuthentication, getOneScoreRouter)
app.use('/player', jwtAuthentication, deletePlayerRouter)
app.use('/score', jwtAuthentication, deletePlayerScoreChartRouter)