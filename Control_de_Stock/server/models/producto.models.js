const mongoose = require("mongoose");

const ProductoSchema = new mongoose.Schema({
  titulo: String,
  cantidad: Number,
  descripcion: String,
});

const Producto = mongoose.model("Producto", ProductoSchema);

module.exports = Producto;
