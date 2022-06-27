const express = require('express');
const Sensor = require('../models/sensor');

const router = express.Router();

router.get('/', async (req, res, next) => {
    try {
        const sensors = await Sensor.findAll();
        res.render('sequelize', { sensors });
    } catch (err) {
        console.error(err);
        next(err);
    }
});

module.exports = router;