const express = require('express')
const app = express()
const port = 3001
require('dotenv').config()

const mqttHandler = require('./utils/mqtt_handler')

app.use(express.json())

var mqttClient = new mqttHandler();
mqttClient.connect();

// Routes
app.post("/send-mqtt", function(req, res) {
  mqttClient.sendMessage(req.body.message);
  res.status(200).send("Message sent to mqtt");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})