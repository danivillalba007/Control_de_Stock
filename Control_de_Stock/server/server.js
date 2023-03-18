const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
const cookieParser = require("cookie-parser");

require("dotenv").config();

//middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "http://localhost:3000", credentials: true }));
app.use(cookieParser());

//base de datos
require("./config/mongoose.config");

//enrutamiento
const RutaProducto = require("./routes/producto.routes");
RutaProducto(app);
const RutaUsuarios = require("./routes/user.routes");
RutaUsuarios(app);

//levantar servidor node
app.listen(port, () => console.log("servidor corriendo en puerto:" + port));
