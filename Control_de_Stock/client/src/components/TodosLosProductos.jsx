import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import "../styles/TodosLosProductos.css";

const TodosLosProductos = ({ listaProductos }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleClickBorrar = (id) => {
    axios
      .delete("http://localhost:8000/api/producto/delete/" + id, {
        withCredentials: true,
      })
      .then((res) => {
        navigate("/producto");
      }) //console.log(res))
      .catch((error) => console.log(error));
  };

  const handleClickEditar = (id) => {
    navigate("/producto/editar/" + id);
  };

  return (
    <>
      <h2>Todos los Productos</h2>

      <div>
        {listaProductos.map((producto, index) => {
          return (
            <p key={index}>
              {producto.titulo}
              <button
                className="boton"
                onClick={() => handleClickBorrar(producto._id)}
              >
                Borrar
              </button>
              <button
                className="boton"
                onClick={() => handleClickEditar(producto._id)}
              >
                Editar
              </button>

              <br />
              <Link
                className="link"
                to={"/producto/detalle/" + producto._id}
                key={index}
              >
                ver detalle
              </Link>
            </p>
          );
        })}
      </div>
    </>
  );
};

export default TodosLosProductos;
