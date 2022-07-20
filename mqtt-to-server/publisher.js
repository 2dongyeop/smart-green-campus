const mqtt = require('mqtt');

const client = mqtt.connect('mqtt://broker.hivemq.com')

var message = {
    "sensor_name": "humudity",
    "location": "N8",
    "value": 80
}

setInterval(
    () => {
        message.value=(Math.floor(Math.random()*35));

        client.publish("green-campus/sensors",JSON.stringify(message));
    },

    2000
);