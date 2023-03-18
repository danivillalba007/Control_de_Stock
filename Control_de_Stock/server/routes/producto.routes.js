const ProductoController = require("../controllers/producto.controllers");
const { authenticate } = require("../config/jwt.config");

module.exports = (app) => {
  app.post(
    "/api/producto/new",
    authenticate,
    ProductoController.crearNuevoProducto
  );

  app.get("/api/productos", authenticate, ProductoController.obtenerProductos);

  app.get(
    "/api/producto/detalle/:_id",
    authenticate,
    ProductoController.obtenerProducto
  );

  app.put(
    "/api/producto/update/:_id",
    authenticate,
    ProductoController.actualizarProducto
  );

  app.delete(
    "/api/producto/delete/:_id",
    authenticate,
    ProductoController.eliminarProducto
  );
};
