import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import './style.css';


export default function Empresa() {

    const [ruc, setRuc] = useState('');
    const [razonSocial, setRazonSocial] = useState('');
    const [rubro, setRubro] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telef, setTelef] = useState('');
    const [ciudad, setCiudad] = useState('');

    function handleSubmit(e) {

        const data = new FormData();
        // const user_id = localStorage.getItem('user');

        data.append('ruc', ruc);
        data.append('razonSocial', razonSocial);
        data.append('rubro', rubro);
        data.append('direccion', direccion);
        data.append('telefono', telef);
        data.append('ciudad', ciudad);

        e.preventDefault();

        //const response = await applicationCache.post('/empresas', data);
    }

    return (
        <div className="row">

            <div className="container-new col-8">
                <form onSubmit={handleSubmit} >

                    <label htmlFor="ruc" >RUC *</label>
                    <input id="ruc" placeholder="Ingrese su ruc" value={ruc} onChange={event => setRuc(event.target.value)} />
                    <label htmlFor="razonSocial">RAZÓN SOCIAL *</label>
                    <input id="razonSocial" placeholder="Ingrese el nombre de su empresa" value={razonSocial} onChange={event => setRazonSocial(event.target.value)} />
                    <label htmlFor="rubro">RUBRO *</label>
                    <input id="rubro" placeholder="Especifique su rubro" value={rubro} onChange={event => setRubro(event.target.value)} />
                    <label htmlFor="direccion">DIRECCIÓN DE RESIDENCIA *</label>
                    <input id="direccion" placeholder="Especifique la dirección" value={direccion} onChange={event => setDireccion(event.target.value)} />
                    <label htmlFor="telef">TELÉFONO *</label>
                    <input id="telef" placeholder="Ingrese su apellido" value={telef} onChange={event => setTelef(event.target.value)} />
                    <label htmlFor="ciudad">CIUDAD *</label>
                    <input id="ciudad" placeholder="Defina la ciudad" value={ciudad} onChange={event => setCiudad(event.target.value)} />

                    <button type="submit" className="btn">Guardar</button>
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

        </div>)
}