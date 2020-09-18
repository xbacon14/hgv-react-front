import React, { useState, useMemo } from 'react';
import imagen from '../../assets/empresas/image.svg';
import './style.css';

export default function CrearEmpresa() {
    const [thumbnail, setThumbnail] = useState('');
    const [ruc, setRuc] = useState('');
    const [razonSocial, setRazonSocial] = useState('');
    const [rubro, setRubro] = useState('');
    const [direccion, setDireccion] = useState('');
    const [telefono, setTelefono] = useState('');
    const [ciudad, setCiudad] = useState('');

    const preview = useMemo(() => {
        return thumbnail ? URL.createObjectURL(thumbnail) : null;
    }, [thumbnail])

    const [values, setValues] = useState();

    const handleInput = e => {

        const { name, value } = e.target;
        setValues({ ...values, [name]: value })

    }

    const handleSubmit = (e) => {

        // const data = new FormData();
        // const user_id = localStorage.getItem('user');

        // data.append('thumbnail', thumbnail);
        // data.append('ruc', ruc);
        // data.append('razonSocial', razonSocial);
        // data.append('rubro', rubro);
        // data.append('direccion', direccion);
        // data.append('telefono', telefono);
        // data.append('ciudad', ciudad);

        console.log(values);

        e.preventDefault();

        //const response = await applicationCache.post('/empresas', data);
    }

    return (
        <div className="row rows">
            <div className="container-new col-6">
                <form onSubmit={handleSubmit} >
                    <label id="thumbnail" style={{ backgroundImage: `url(${preview})` }}>
                        <input type="file" onChange={event => setThumbnail(event.target.files[0])} />
                        <img src={imagen} alt="Seleccionar Imagen" />

                    </label>
                    <label htmlFor="ruc" >RUC *</label>
                    <input id="ruc"
                        placeholder="Ingrese su ruc"
                        maxLength="7"
                        name="ruc"
                        onChange={handleInput} />
                    <label htmlFor="razonSocial">RAZON SOCIAL *</label>
                    <input
                        name="razonSocial"
                        onChange={handleInput}
                        placeholder="Ingrese su razón social" />
                    <label htmlFor="rubro">RUBRO *</label>
                    <input name="rubro"
                        onChange={handleInput}
                        placeholder="Ingrese su rubro" />
                    <label htmlFor="direccion"
                    >DIRECCIÓN *</label>
                    <input id="direccion"
                        onChange={handleInput}
                        name="direccion"
                        placeholder="Ingrese su rubro" />
                    <label htmlFor="telefono">TELÉFONO *</label>
                    <input id="telef" name="telefono"
                        onChange={handleInput}
                        placeholder="Ingrese su rubro" />
                    <label htmlFor="ciudad">CIUDAD *</label>
                    <input id="ciudad" name="ciudad"
                        placeholder="Ingrese su rubro" onChange={handleInput} maxLength="40" />

                    <button type="submit" className="btn">Crear</button>
                </form>
            </div>
            <div className="container-new col-4"></div>
        </div>
    );
}