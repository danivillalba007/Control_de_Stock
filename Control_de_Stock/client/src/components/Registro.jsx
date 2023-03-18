import { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const Registro = () => {

    const [campos, setCampos] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    })

    const navigate  = useNavigate()

    const submitHandler = (e) => {
        e.preventDefault()
        axios.post("http://localhost:8000/api/registro", campos, {withCredentials:true})
            .then(resultado => navigate("/"))
            .catch(error=>console.log(error))
    }

    const handleChange = (e) => {
        setCampos(prevState => ({ ...prevState, [e.target.name]: e.target.value }))

    }

    return (
        <div>
            <form onSubmit={submitHandler} className='col-6 mx-auto'>
                <label htmlFor="" className='form-label'>Nombre:</label>
                <input type="text" className='form-control' onChange={handleChange} name="firstName" />
                <label htmlFor="" className='form-label'>Apellido:</label>
                <input type="text" className='form-control' onChange={handleChange} name="lastName" />
                <label htmlFor="" className='form-label'>Email:</label>
                <input type="text" className='form-control' onChange={handleChange} name="email" />
                <label htmlFor="" className='form-label'> Password</label>
                <input type="password" className='form-control' onChange={handleChange} name="password" />
                <label htmlFor="" className='form-label'> Confirm Password</label>
                <input type="password" className='form-control' onChange={handleChange} name="" />
                <button className='btn btn-success mt-3'> Registrate!!!</button>
            </form>
        </div>

    )
}

export default Registro