const express = require("express");
const router = express.Router();
const Stats = require("../models/Stats");

// GET: obtener todos los datos
router.get("/", async (req, res) => {
  try {
    const stats = await Stats.find();
    res.json(stats);
  } catch (err) {
    res.status(500).json({ message: "Error al obtener los datos" });
  }
});

// POST: insertar un nuevo dato (para pruebas)
router.post("/", async (req, res) => {
  try {
    const nuevo = new Stats(req.body);
    await nuevo.save();
    res.status(201).json(nuevo);
  } catch (err) {
    res.status(400).json({ message: "Error al guardar" });
  }
});

module.exports = router;
