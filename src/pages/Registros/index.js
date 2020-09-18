import React, { useState, useMemo } from 'react';
import '../CrearEmpresa/style.css';

export default function Registro() {


    const [ci, setci] = useState('');
    const [nombre, setnombre] = useState('');
    const [apellido, setapellido] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [ciudad, setCiudad] = useState('');


    const [values, setValues] = useState();

    const handleInput = e => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })

    }

    const handleSubmit = (e) => {

        // const data = new FormData();
        // const user_id = localStorage.getItem('user');

        // data.append('ci', ci);
        // data.append('nombre', nombre);
        // data.append('apellido', apellido);
        // data.append('direccion', direccion);
        // data.append('telefono', telef);
        // data.append('ciudad', ciudad);

        console.log(values);

        e.preventDefault();

        //const response = await applicationCache.post('/empresas', data);
    }



    return (
        <div className="row" id="row">

            <div className="container-new col-7">
                <form onSubmit={handleSubmit} >

                    <label htmlFor="ci" >CI *</label>
                    <input id="ci"
                        name="ci"
                        onChange={handleInput}
                        placeholder="Ingrese su ci"  />
                    <label htmlFor="nombre">NOMBRE *</label>
                    <input id="nombre"
                        onChange={handleInput}
                        name="nombre"
                        placeholder="Ingrese solamente el primer nombre"  />
                    <label htmlFor="apellido">PRIMER APELLIDO *</label>
                    <input id="apellido"
                        name="apellido"
                        onChange={handleInput}
                        placeholder="Ingrese solamente el segundo apellido"  />
                    <label htmlFor="direccion">DIRECCIÓN DE RESIDENCIA *</label>
                    <input id="direccion"
                        name="direccion"
                        onChange={handleInput}
                        placeholder="Especifique la dirección"  />
                    <label htmlFor="telefono">TELÉFONO *</label>
                    <input id="telefono"
                        name="telefono"
                        onChange={handleInput}
                        placeholder="Ingrese su número de teléfono" />
                    <label htmlFor="ciudad">CIUDAD *</label>
                    <input id="ciudad"
                        name="ciudad"
                        onChange={handleInput}
                        placeholder="Especifique su ciudad de residencia" />

                    <button type="submit" className="btn">Crear</button>
                </form>
            </div >
            <div className="col-4 ">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Italo Golin</h5>
                        <p className="card-text">15:03:06 - 24/10/2020</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Italo Golin</h5>
                        <p className="card-text">15:03:06 - 24/10/2020</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Italo Golin</h5>
                        <p className="card-text">15:03:06 - 24/10/2020</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Italo Golin</h5>
                        <p className="card-text">15:03:06 - 24/10/2020</p>
                    </div>
                </div>
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">Italo Golin</h5>
                        <p className="card-text">15:03:06 - 24/10/2020</p>
                    </div>
                </div>
            </div>

        </div>
    )
}