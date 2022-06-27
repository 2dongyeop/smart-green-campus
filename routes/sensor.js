const express = require('express');
const Sensor = require('../models/sensor');

const router = express.Router();

router.route('/')
    .get(async (req, res, next) => {
        try {
            const sensors = await Sensor.findAll();
            res.json(sensors);
        } catch (err) {
            console.error(err);
            next(err);
        }
    })
    .post(async (req, res, next) => {
        try {
            const user = await Sensor.create({
                id: req.body.id,
                value: req.body.value
            });
            console.log(user);
            res.status(201).json(user);
        } catch (err) {
            console.error(err);
            next(err);
        }
    });

module.exports = router;