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
        <div className="container-new">
            <form onSubmit={handleSubmit} >

                <label htmlFor="ci" >CI *</label>
                <input id="ci" placeholder="Ingrese su ci" value={ci} onChange={event => setci(event.target.value)} />
                <label htmlFor="nombre">PRIMER NOMBRE *</label>
                <input id="nombre" placeholder="Ingrese el nombre de su empresa" value={nombre} onChange={event => setnombre(event.target.value)} />
                <label htmlFor="apellido">PRIMER APELLIDO *</label>
                <input id="apellido" placeholder="Ingrese su apellido" value={apellido} onChange={event => setapellido(event.target.value)} />
                <label htmlFor="direccion">DIRECCIÓN DE RESIDENCIA *</label>
                <input id="direccion" placeholder="Ingrese su apellido" value={direccion} onChange={event => setDireccion(event.target.value)} />
                <label htmlFor="telef">TELÉFONO *</label>
                <input id="telef" placeholder="Ingrese su apellido" value={telef} onChange={event => setTelef(event.target.value)} />
                <label htmlFor="ciudad">CIUDAD *</label>
                <input id="ciudad" placeholder="Ingrese su apellido" value={ciudad} onChange={event => setCiudad(event.target.value)} />

                <button type="submit" className="btn">Crear</button>
            </form>
        </div >
    )
}