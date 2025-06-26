const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json()); // para poder leer JSON en las peticiones

// Conectar a la BBDD
const connectDB = require("./config/db");
connectDB();

// Rutas
app.use("/api/users", require("./routes/users.routes"));
app.use("/api/locations", require("./routes/location.routes")); 
app.use("/api/events", require("./routes/events.routes"));
app.use("/api/stats", require("./routes/stats.routes"));



// Servidor escuchando
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
