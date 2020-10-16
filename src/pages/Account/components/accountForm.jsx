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
        // const { name, value } = e.target;
        // setValues({ ...values, [name]: value })
        // valores.push({ ...values, [name]: value })
        const { name, value } = e.target

        if (name === "razonSocial") {
            var razonSocial = value.toUpperCase();
            console.log(razonSocial)
            setValues({ ...values, [name]: razonSocial })
        }
        if (name === "direccion") {
            var direccion = value.toUpperCase();
            console.log(direccion)
            setValues({ ...values, [name]: direccion })
        }
        if (name === "rubro") {
            var rubro = value.toUpperCase();
            console.log(rubro)
            setValues({ ...values, [name]: rubro })
        }
        if (name === "ciudad") {
            var ciudad = value.toUpperCase();
            console.log(ciudad)
            setValues({ ...values, [name]: ciudad })
        } else {
            if (name !== "razonSocial" & name !== "direccion" & name !== "ciudad") {
                // console.log("rafa gay")
                setValues({ ...values, [name]: value })
            }
        }

    }


    const handleSubmit = (e) => {
        var enviado = true;
        e.preventDefault();
        props.addOrEditLink(values);
        document.getElementById("ruc").value = ""
        document.getElementById("razonSocial").value = ""
        document.getElementById("rubro").value = ""
        document.getElementById("direccion").value = ""
        document.getElementById("telefono").value = ""
        document.getElementById("ciudad").value = ""
    }


    return (

        <div className="container-new col-6">
            <form onSubmit={handleSubmit} id="formulario">

                <label htmlFor="ruc" >RUC *</label>
                <input id="ruc"
                    name="ruc"
                    defaultValue=""
                    onChange={handleInput}
                    placeholder="Ingrese su ruc" maxLength="10" onChange={handleInput} />
                <label htmlFor="razonSocial">RAZÓN SOCIAL *</label>
                <input id="razonSocial"
                    name="razonSocial"
                    defaultValue=""
                    onChange={handleInput}
                    placeholder="Ingrese el nombre de su empresa" />
                <label htmlFor="rubro">RUBRO *</label>
                <input id="rubro"
                    name="rubro"
                    onChange={handleInput}
                    placeholder="Especifique su rubro" />
                <label htmlFor="direccion">DIRECCIÓN COMERCIAL *</label>
                <input id="direccion"
                    name="direccion"
                    onChange={handleInput}
                    placeholder="Especifique la dirección" />
                <label htmlFor="telefono">TELÉFONO *</label>
                <input id="telefono"
                    name="telefono"
                    onChange={handleInput}
                    placeholder="Especifique su número de teléfono" />
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
