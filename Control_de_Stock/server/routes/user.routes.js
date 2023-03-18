const controladorUsuario = require("../controllers/user.controller");

module.exports = (app) => {
  //REGISTRO
  app.post("/api/registro", controladorUsuario.crearUsuario);
  app.post("/api/login", controladorUsuario.loginUsuario);
  app.get("/api/logout", controladorUsuario.logOutUser);
};
