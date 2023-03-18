import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ProductManager.css";
import TodosLosProductos from "./TodosLosProductos";

const ProductManager = () => {
  const navigate = useNavigate();
  const [formState, setFormState] = useState({
    titulo: "",
    cantidad: "",
    descripcion: "",
  });

  const { titulo, cantidad, descripcion } = formState;
  const [listaProductos, setlistaProductos] = useState([]);

  useEffect(() => listarProductos(), []);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const crearProducto = (e) => {
    e.preventDefault();

    axios
      .post("http://localhost:8000/api/producto/new", formState, {
        withCredentials: true,
      })
      .then((res) => {
        // console.log(res);
        listarProductos();
        setFormState({
          titulo: "",
          cantidad: "",
          descripcion: "",
        });
        navigate("/producto");
      })

      .catch((err) => {
        // setErrores(err.response.data.errors);
        console.log(err);
      });
  };

  const listarProductos = () => {
    axios
      .get("http://localhost:8000/api/productos", {
        withCredentials: true,
      })
      .then((res) => {
        setlistaProductos(res.data);
        // console.log(res.data);
      })
      .catch((err) => console.log(err, "Error de referencia"));
  };
  function handleLogout() {
    axios
      .get("http://localhost:8000/api/logout", {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/");
      })
      .catch((err) => console.log(err, "Error de referencia"));
  }

  return (
    <div>
      <h1>
        Control de stock <button onClick={handleLogout}>Logout</button>
      </h1>
      <form className="ProductManager" onSubmit={crearProducto}>
        <p>
          <label> Producto : </label>
          <input
            type="text"
            name="titulo"
            onChange={onInputChange}
            value={titulo}
          />
        </p>
        <p>
          <label> Cantidad : </label>
          <input
            type="number"
            name="cantidad"
            onChange={onInputChange}
            value={cantidad}
          />
        </p>
        <p>
          <label> Descripción : </label>
          <input
            type="text"
            name="descripcion"
            onChange={onInputChange}
            value={descripcion}
          />
        </p>
        <button> Crear </button>
      </form>
      <TodosLosProductos listaProductos={listaProductos}></TodosLosProductos>
    </div>
  );
};
export default ProductManager;
