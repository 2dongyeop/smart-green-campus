const router = require('express').Router();
const sensor = require('../controller/controller.js');

// Create tutorial
router.post('/api/sensor', sensor.create);

// Retrieve all tutorials
router.get('/api/sensor', sensor.findAll);

// Retrieve tutorial by id
router.get('/api/sensor/:id', sensor.findOne);

// Update tutorial by id
router.put('/api/sensor/:id', sensor.update);

// Delete tutorial by id
router.delete('/api/sensor/:id', sensor.delete);

module.exports = router;