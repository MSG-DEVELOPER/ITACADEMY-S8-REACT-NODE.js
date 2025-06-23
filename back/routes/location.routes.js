const express = require('express');
const router = express.Router();
const Location = require('../models/location');

router.get('/', async (req, res) => {
  const locations = await Location.find();
  res.json(locations);
});

router.post('/', async (req, res) => {
  const { name, latitude, longitude } = req.body;
  try {
    const newLocation = new Location({ name, latitude, longitude });
    await newLocation.save();
    res.status(201).json(newLocation);
  } catch (err) {
    res.status(400).json({ error: 'Error al guardar ubicación' });
  }
});

module.exports = router;
