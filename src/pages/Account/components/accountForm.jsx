import React, { useState } from 'react';

const AccountForm = (props) => {


    var idUsuario = 42;

    const initialStateValues = {
        ruc: '',
        razonSocial: '',
        rubro: '',
        direccion: '',
        telefono: '',
        ciudad: '',
        idUsuario: idUsuario,
    }

    const [values, setValues] = useState(initialStateValues);


    const handleInput = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value })

        // valores.push({ ...values, [name]: value })
    }


    const handleSubmit = (e) => {
        var enviado = true;
        e.preventDefault();
        props.addOrEditLink(values);
        console.log(e);
    }


    return (

        <div className="container-new col-6">
            <form onSubmit={handleSubmit} id="formulario">

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

export default AccountForm;

// export default class RegistroForm extends Component {

//     state = {
//         values: []
//     }

//     handleInput(e) {
//         var valores = [];
//         const { name, value } = e.target;
//         console.log(name, value);

//     valores.push({ ...values, [name]: value })
//     }

//     handleSubmit(e) {
//         var now = Date.now();
//         values.push({ timestamp: now });
//         console.log(this.state.values);
//         e.preventDefault();
//         this.props.addOrEditLink(values);
//     }
