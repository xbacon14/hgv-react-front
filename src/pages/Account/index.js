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

    const handleInput = e => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }

    const [values, setValues] = useState();

    function handleSubmit(e) {

        // const data = new FormData();
        // const user_id = localStorage.getItem('user');

        // data.append('ruc', ruc);
        // data.append('razonSocial', razonSocial);
        // data.append('rubro', rubro);
        // data.append('direccion', direccion);
        // data.append('telefono', telef);
        // data.append('ciudad', ciudad);

        console.log(values);
        e.preventDefault();

        //const response = await applicationCache.post('/empresas', data);
    }

    return (
        <div className="row" id="row" >

            <div className="container-new col-7">
                <form onSubmit={handleSubmit} >

                    <label htmlFor="ruc" >RUC *</label>
                    <input id="ruc"
                        name="ruc"
                        placeholder="Ingrese su ruc" maxLength="9" onChange={handleInput} />
                    <label htmlFor="razonSocial">RAZÓN SOCIAL *</label>
                    <input id="razonSocial"
                        name="razonSocial"
                        onChange={handleInput}
                        placeholder="Ingrese el nombre de su empresa" />
                    <label htmlFor="rubro">RUBRO *</label>
                    <input id="rubro"
                        name="rubro"
                        onChange={handleInput}
                        placeholder="Especifique su rubro" />
                    <label htmlFor="direccion">DIRECCIÓN DE RESIDENCIA *</label>
                    <input id="direccion"
                        name="direccion"
                        onChange={handleInput}
                        placeholder="Especifique la dirección" />
                    <label htmlFor="telefono">TELÉFONO *</label>
                    <input id="telefono"
                        name="telefono"
                        onChange={handleInput}
                        placeholder="Ingrese su apellido" />
                    <label htmlFor="ciudad">CIUDAD *</label>
                    <input id="ciudad"
                        name="ciudad"
                        onChange={handleInput}
                        placeholder="Defina la ciudad" />

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