const mqtt = require('mqtt');
const Client = require('node-rest-client').Client;  //node에서 외부 api 소비
const client = new Client();

var args = {
    data: {},
    headers: {"Content-Type": "application/json"}
};

const subclient = mqtt.connect('mqtt://broker.hivemq.com');

//test 토픽 구독
subclient.subscribe("green-campus/sensors");

subclient.on('message', function (topic, message) {
    args.data = message.toString('utf-8');
    console.log(message.toString('utf-8'));
    client.post("http://192.168.10.171:8080/api/sensors", args, function (data, response) {

    });
    // console.log("토픽:" + topic, "메세지:" + message)
});

