import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "../styles/ProductManager.css";

const EditarProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formState, setFormState] = useState({
    titulo: "",
    cantidad: "",
    descripcion: "",
  });

  const { titulo, cantidad, descripcion } = formState;

  useEffect(() => listarProductoPorID(), []);

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  const editarProducto = (e) => {
    e.preventDefault();

    axios
      .put("http://localhost:8000/api/producto/update/" + id, formState, {
        withCredentials: true,
      })
      .then((res) => {
        console.log(res);
        navigate("/producto");
      })
      .catch((err) => {
        // setErrores(err.response.data.errors);
      });
  };

  const listarProductoPorID = () => {
    axios
      .get("http://localhost:8000/api/producto/detalle/" + id, {
        withCredentials: true,
      })
      .then((res) => {
        setFormState(res.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>EditarProducto</h2>

      <form className="ProductManager" onSubmit={editarProducto}>
        <p>
          <label> Titulo : </label>
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
            className="inputDescripcion"
            type="text"
            name="descripcion"
            onChange={onInputChange}
            value={descripcion}
          />
        </p>
        <button> Guardar </button>
      </form>
    </div>
  );
};

export default EditarProducto;
