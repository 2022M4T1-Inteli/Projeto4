const express = require('express')
const app = express()
const port = 3001
require('dotenv').config()

const mqttHandler = require('./mqtt/setup')

require('./db/mongoose')

app.use(express.json())

var cookieParser = require('cookie-parser')
app.use(cookieParser())

const cors = require('cors')
app.use(
    cors({
        credentials: true,
        origin: process.env.CLIENT_URL
    })
)

var mqttClient = new mqttHandler();
mqttClient.connect();

const deviceRoutes = require("./routes/device")
app.use(deviceRoutes)

const userRoutes = require("./routes/user")
app.use(userRoutes)

// Routes
app.get("/buzzer/:id", function(req, res) {
  mqttClient.ringBuzzer(req.params.id);
  res.send("Message sent to mqtt");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})