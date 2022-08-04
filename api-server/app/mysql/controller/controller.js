const db = require('../model/index.js');
const Sensor = db.sensor;
const Op = db.sequelize.Op;
const mailer = require('../../../nodemailer//routes/mail');

// Create tutorial
exports.create = (req, res) => {
    // Validate request
    if (!req.body.value || !req.body.sensor_name || !req.body.location) {
        res.status(400).send({
            message: 'Information is empty!'
        });
        return;
    }

    //온도가 35도가 넘어가면 경고 발생 -> 콘솔창이 아닌 페이지에서 볼 수 있도록
    if (req.body.sensor_name == "temperature" && req.body.value >= 35) {

        const temp = req.body.value;
        const emailParam = {
            toEmail: '20181676@edu.hanbat.ac.kr',

            subject: 'temperature problem occur',

            text: `경고!! 온도가 ${temp}도로 너무 높습니다.`
        };

        mailer.sendMail(emailParam);
    }

    // Set tutorial
    const sensor = {
        sensor_name: req.body.sensor_name,
        location: req.body.location,
        value: req.body.value
    };

    // Save tutorial
    Sensor
        .create(sensor)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Create sensor failure.'
            });
        });
};

// Retrieve all tutorials
exports.findAll = (req, res) => {
    const value = req.query.value;
    let condition = { where: {} };

    Sensor
        .findAll(condition)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Retrieve all sensor failure.'
            });
        });
};

// Retrieve tutorial by id
exports.findOne = (req, res) => {
    const id = req.params.id;

    Sensor
        .findByPk(id)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Retrieve sensor failure. (id: ' + id + ')'
            });
        });
};

// Update tutorial by id
exports.update = (req, res) => {
    const id = req.params.id;
    const condition = id ? { where: { id: id } } : null;

    Sensor
        .update(
            req.body,
            condition
        )
        .then(resultCount => {
            if (resultCount == 1) {
                res.send({
                    message: 'Sensor updated.'
                });
            } else {
                res.send({
                    message: 'Cannot update sensor. (id: ' + id + ')'
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Update sensor failure. (id: ' + id + ')'
            });
        });
};

// Delete tutorial by id
exports.delete = (req, res) => {
    const id = req.params.id;
    const condition = id ? { where: { id: id } } : null;

    Sensor
        .destroy(condition)
        .then(resultCount => {
            if (resultCount == 1) {
                res.send({
                    message: 'Tutorial deleted.'
                });
            } else {
                res.send({
                    message: 'Cannot delete tutorial. (id: ' + id + ')'
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || 'Delete tutorial failure. (id: ' + id + ')'
            });
        });
};
