import React, { useState, useEffect } from 'react';
import GetCurrentDate from '../../../components/date/getCurrentDate';
import "../../CrearEmpresa/style.css";

export default function RegistroForm(props) {
    let timestamp = GetCurrentDate();


    useState({
        ci: '',
        nombre: '',
        direccion: '',
        ciudad: '',
        telefono: '',
        empresa: '',
    })

    const handleInput = e => {
        const { name, value } = e.target;
        // console.log(name, value);
        setValues({ ...values, [name]: value })
    }

    const [values, setValues] = useState();
    const [setTimeStamp] = useState();

    function handleSubmit(e) {
        console.log(values);
        e.preventDefault();
        setTimeStamp = timestamp;
        props.addOrEditLink(values);
    }

    return (
        <div className="container-new col-6">
            <form onSubmit={handleSubmit} >

                <label htmlFor="ci" >CI *</label>
                <input id="ci"
                    name="ci"
                    required
                    onChange={handleInput}
                    placeholder="Ingrese su ci" />
                <label htmlFor="nombre">NOMBRE Y APELLIDO *</label>
                <input id="nombre"
                    onChange={handleInput}
                    name="nombre"
                    required
                    placeholder="Nombre y Apellido" />
                <label htmlFor="direccion">DIRECCIÓN DE RESIDENCIA *</label>
                <input id="direccion"
                    name="direccion"
                    required
                    onChange={handleInput}
                    placeholder="Especifique la dirección" />
                <label htmlFor="telefono">TELÉFONO *</label>
                <input id="telefono"
                    name="telefono"
                    required
                    onChange={handleInput}
                    placeholder="Ingrese su número de teléfono" />
                <label htmlFor="ciudad">CIUDAD *</label>
                <input id="ciudad"
                    name="ciudad"
                    required
                    autoComplete="off"
                    onChange={handleInput}
                    placeholder="Especifique su ciudad de residencia" />
                <input type="text" />

                <button type="submit" className="btn">Crear</button>
            </form>
        </div >
    )
}

