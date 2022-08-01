const express = require('express');        //RESTful API 환경을 구축하기 위해 사용
const bodyParser = require('body-parser'); //request 구문과 req.body를 파싱
const cors = require('cors');              //CORS 설정에 사용

const app = express();

const PORT = process.env.PORT || 8080;

import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object
const firebaseConfig = {
    // ...
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Firebase Cloud Messaging and get a reference to the service
const messaging = getMessaging(app);


// Set CORS option
app.use(cors());

// Parse requests of content-type: application/json
app.use(bodyParser.json());

// Parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// RESTful API route for DB
app.use('/', require('./app/mysql/route/route.js'));

// DB Connection
const db = require('./app/mysql/model/index.js');
db.sequelizeConfig.sync();

// Default route for server status
app.get('/', (req, res) => {
    res.json({ message: `Server is running on port ${PORT}` });
});

// Set listen port for request
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});