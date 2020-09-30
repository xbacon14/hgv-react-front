import React, { useState, useEffect } from 'react';
import cities from '../../../services/db.json';

export default function RegistroForm(props) {
    const handleInput = e => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }

    const [values, setValues] = useState();

    const [ciudades, setCiudades] = useState();

   function loadCiudades() {
        ciudades = cities.data;
        console.log(ciudades[0]);
    }

    function handleSubmit(e) {
        console.log(values);
        e.preventDefault();
        props.addOrEditLink(values);
    }

    return (
        <div className="container-new col-7">
            <form onSubmit={handleSubmit} >

                <label htmlFor="ci" >CI *</label>
                <input id="ci"
                    name="ci"
                    onChange={handleInput}
                    placeholder="Ingrese su ci" />
                <label htmlFor="nombre">NOMBRE *</label>
                <input id="nombre"
                    onChange={handleInput}
                    name="nombre"
                    placeholder="Ingrese solamente el primer nombre" />
                <label htmlFor="apellido">PRIMER APELLIDO *</label>
                <input id="apellido"
                    name="apellido"
                    onChange={handleInput}
                    placeholder="Ingrese solamente el segundo apellido" />
                <label htmlFor="direccion">DIRECCIÓN DE RESIDENCIA *</label>
                <input id="direccion"
                    name="direccion"
                    onChange={handleInput}
                    placeholder="Especifique la dirección" />
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
    )
}

