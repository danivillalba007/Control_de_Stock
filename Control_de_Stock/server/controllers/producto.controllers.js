const Producto = require("../models/producto.models");

module.exports.crearNuevoProducto = (req, res) => {
  Producto.create(req.body)
    .then((nuevoProducto) => res.json({ user: nuevoProducto }))
    .catch((err) => res.json({ message: "Algo salió mal", error: err }));
};

module.exports.obtenerProducto = (req, res) => {
  const _id = req.params._id;
  Producto.findById(_id)
    .exec()
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => res.json(error));
};

module.exports.obtenerProductos = (req, res) => {
  Producto.find()
    .then((resultado) => {
      res.json(resultado);
    })
    .catch((error) => res.json(error));
};

module.exports.actualizarProducto = (req, res) => {
  const _id = req.params._id;
  console.log(req.body);
  Producto.updateOne({ _id: _id }, req.body)
    .then((resultado) => res.json(resultado))
    .catch((error) => res.status(400).json(error));
};

module.exports.eliminarProducto = (req, res) => {
  Producto.deleteOne({ _id: req.params._id })
    .then((resultado) => res.json(resultado))
    .catch((error) => res.json(error));
};

module.exports.actualizarProducto = (req, res) => {
  const _id = req.params._id;
  console.log(req.body);
  Producto.updateOne({ _id: _id }, req.body, { runValidators: true })
    .then((resultado) => res.json(resultado))
    .catch((error) => res.status(400).json(error));
};
