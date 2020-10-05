import React, { useState, useEffect, Component } from 'react';
import GetCurrentDate from '../../../components/date/getCurrentDate';
// import api from '../../../services/api';
// import ciudades from '../../../services/ciudades'
import AutoComplete from './autocomplete.jsx';

import "../../CrearEmpresa/style.css";

export default function RegistroForm() {

    const [values, setValues] = useState([]);

    function handleInput(e) {
        const { name, value } = e.target;
        console.log(name, value);
        setValues({ ...values, [name]: value })
    }

    function loadRegistros() {
    }


    // handleSubmit(e) {
    //     values.push({ timestamp: setTimeStamp });
    //     console.log(values);
    //     e.preventDefault();
    //     props.addOrEditLink(values);
    // }
    return (
        <div className="container-new col-6">
            <form
            //  onSubmit={this.handleSubmit} 
            >

                <label htmlFor="ci" >CI *</label>
                <input id="ci"
                    name="ci"
                    required
                    autoComplete="off"
                    onChange={handleInput}
                    placeholder="Ingrese su ci" />
                <label htmlFor="nombre">NOMBRE Y APELLIDO *</label>
                <input id="nombre"
                    onChange={handleInput}
                    name="nombre"
                    required
                    autoComplete="off"
                    placeholder="Nombre y Apellido" />
                <label htmlFor="direccion">DIRECCIÓN DE RESIDENCIA *</label>
                <input id="direccion"
                    name="direccion"
                    required
                    autoComplete="off"
                    onChange={handleInput}
                    placeholder="Especifique la dirección" />
                <label htmlFor="telefono">TELÉFONO *</label>
                <input id="telefono"
                    name="telefono"
                    required
                    autoComplete="off"
                    onChange={handleInput}
                    placeholder="Ingrese su número de teléfono" />
                <label htmlFor="ciudad">CIUDAD *</label>
                <input id="ciudad"
                    name="ciudad"
                    required
                    autoComplete="off"
                    // onChange={event => this.setCiudades(event.target.value)}
                    onChange={handleInput}
                    placeholder="Especifique su ciudad de residencia" />

                <button type="submit" className="btn">Crear</button>
            </form>
        </div >
    )

}

