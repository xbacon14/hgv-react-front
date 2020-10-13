import React, { useState } from 'react';
import '../../../components/formatadores/ci';
// import moment from 'moment';
// import GetCurrentDate from '../../../components/date/getCurrentDate';
// import api from '../../../services/api';
// import ciudades from '../../../services/ciudades'

import "../../CrearEmpresa/style.css";

const RegistroForm = (props) => {
    var idUsuario = 42;
    var enviado = false;

    const initialStateValues = {
        ci: '',
        nombre: '',
        rubro: '',
        direccion: '',
        telefono: '',
        ciudad: '',
        idUsuario: idUsuario,
    }

    const [values, setValues] = useState();

    const handleInput = (e) => {
        const { name, value } = e.target

        if (name === "ci") {
            console.log(value)
        }


        setValues({ ...values, [name]: value })

    }

    const validarCampos = () => {
        values.forEach(element => {
            console.log(element)

        });
    }

    const handleSubmit = (e) => {
        enviado = true;
        validarCampos();
        e.preventDefault();
        // props.addOrEditLink(values);
        console.log(e);
    }

    return (
        <div className="container-new col-6">
            <form
                onSubmit={handleSubmit}
            >

                <label htmlFor="ci" >CI *</label>
                <input id="ci"
                    required
                    name="ci"
                    // autoComplete="off"
                    onChange={handleInput}
                    placeholder="Ingrese su ci" />
                <label htmlFor="nombre">NOMBRE Y APELLIDO *</label>
                <input id="nombre"
                    onChange={handleInput}
                    required
                    name="nombre"
                    // autoComplete="off"
                    placeholder="Nombre y Apellido" />
                <label htmlFor="direccion">DIRECCIÓN DE RESIDENCIA *</label>
                <input id="direccion"
                    required
                    name="direccion"
                    // autoComplete="off"
                    onChange={handleInput}
                    placeholder="Especifique la dirección" />
                <label htmlFor="telefono">TELÉFONO *</label>
                <input id="telefono"
                    required
                    name="telefono"
                    // autoComplete="off"
                    onChange={handleInput}
                    placeholder="Ingrese su número de teléfono" />
                <label htmlFor="ciudad">CIUDAD *</label>
                <input id="ciudad"
                    required
                    name="ciudad"
                    // autoComplete="off"
                    // onChange={event => this.setCiudades(event.target.value)}
                    onChange={handleInput}
                    placeholder="Especifique su ciudad de residencia" />

                <button type="submit" className="btn">Crear</button>
            </form>
        </div >
    )
}

export default RegistroForm;
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

//     render() {
//         return (
//             <div className="container-new col-6">
//                 <form
//                     onSubmit={this.handleSubmit}
//                 >

//                     <label htmlFor="ci" >CI *</label>
//                     <input id="ci"
//                         name="ci"
//                         required
//                         autoComplete="off"
//                         onChange={this.handleInput}
//                         placeholder="Ingrese su ci" />
//                     <label htmlFor="nombre">NOMBRE Y APELLIDO *</label>
//                     <input id="nombre"
//                         onChange={this.handleInput}
//                         name="nombre"
//                         required
//                         autoComplete="off"
//                         placeholder="Nombre y Apellido" />
//                     <label htmlFor="direccion">DIRECCIÓN DE RESIDENCIA *</label>
//                     <input id="direccion"
//                         name="direccion"
//                         required
//                         autoComplete="off"
//                         onChange={this.handleInput}
//                         placeholder="Especifique la dirección" />
//                     <label htmlFor="telefono">TELÉFONO *</label>
//                     <input id="telefono"
//                         name="telefono"
//                         required
//                         autoComplete="off"
//                         onChange={this.handleInput}
//                         placeholder="Ingrese su número de teléfono" />
//                     <label htmlFor="ciudad">CIUDAD *</label>
//                     <input id="ciudad"
//                         name="ciudad"
//                         required
//                         autoComplete="off"
//                         // onChange={event => this.setCiudades(event.target.value)}
//                         onChange={this.handleInput}
//                         placeholder="Especifique su ciudad de residencia" />

//                     <button type="submit" className="btn">Crear</button>
//                 </form>
//             </div >
//         )
//     }

// }

