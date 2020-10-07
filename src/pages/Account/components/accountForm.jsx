import React, { useState } from 'react';

export default function AccountForm(props) {
    // const [ruc, setRuc] = useState('');
    // const [razonSocial, setRazonSocial] = useState('');
    // const [rubro, setRubro] = useState('');
    // const [direccion, setDireccion] = useState('');
    // const [telef, setTelef] = useState('');
    // const [ciudad, setCiudad] = useState('');

    const handleInput = e => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })
    }


    const [values, setValues] = useState();

    function handleSubmit(e) {


        console.log(values);
        e.preventDefault();
        props.addOrEditLink(values);

        //const response = await applicationCache.post('/empresas', data);
    }

    return (

        <div className="container-new col-6">
            <form onSubmit={handleSubmit} >

                <label htmlFor="ruc" >RUC *</label>
                <input id="ruc"
                    name="ruc"
                    onChange={handleInput}
                    placeholder="Ingrese su ruc" maxLength="10" onChange={handleInput} />
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
        </div>)


}