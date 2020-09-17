import React, { useState, useMemo } from 'react';
import '../CrearEmpresa/style.css';

export default function Registro() {


    const [ci, setci] = useState('');
    const [nombre, setnombre] = useState('');
    const [apellido, setapellido] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telef, setTelef] = useState('');
    const [ciudad, setCiudad] = useState('');

    function handleSubmit(e) {

        const data = new FormData();
        // const user_id = localStorage.getItem('user');

        data.append('ci', ci);
        data.append('nombre', nombre);
        data.append('apellido', apellido);
        data.append('direccion', direccion);
        data.append('telefono', telef);
        data.append('ciudad', ciudad);

        e.preventDefault();

        //const response = await applicationCache.post('/empresas', data);
    }

    return (
        <div className="row" id="row">

            <div className="container-new col-7">
                <form onSubmit={handleSubmit} >

                    <label htmlFor="ci" >CI *</label>
                    <input id="ci" placeholder="Ingrese su ci" value={ci} onChange={event => setci(event.target.value)} />
                    <label htmlFor="nombre">NOMBRE *</label>
                    <input id="nombre" placeholder="Ingrese solamente el primer nombre" value={nombre} onChange={event => setnombre(event.target.value)} />
                    <label htmlFor="apellido">PRIMER APELLIDO *</label>
                    <input id="apellido" placeholder="Ingrese solamente el segundo apellido" value={apellido} onChange={event => setapellido(event.target.value)} />
                    <label htmlFor="direccion">DIRECCIÓN DE RESIDENCIA *</label>
                    <input id="direccion" placeholder="Especifique la dirección" value={direccion} onChange={event => setDireccion(event.target.value)} />
                    <label htmlFor="telef">TELÉFONO *</label>
                    <input id="telef" placeholder="Ingrese su número de teléfono" value={telef} onChange={event => setTelef(event.target.value)} />
                    <label htmlFor="ciudad">CIUDAD *</label>
                    <input id="ciudad" placeholder="Especifique su ciudad de residencia" value={ciudad} onChange={event => setCiudad(event.target.value)} />

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