const mongoose = require("mongoose");

const statsSchema = new mongoose.Schema({
  dia: String,
  usuariosActivos: Number,
  nuevasAltas: Number,
});

module.exports = mongoose.model("Stats", statsSchema);
