import React, { useState, useEffect, Component } from 'react';
import GetCurrentDate from '../../../components/date/getCurrentDate';
import api from '../../../services/api';
import Ciudades from '../../../services/db.json'
import "../../CrearEmpresa/style.css";

export default class RegistroForm extends Component {
    state = {
        // registro: [{
        //     ci: '',
        //     nombre: '',
        //     direccion: '',
        //     telefono: '',
        //     ci: '',
        //     empresa: '',
        //     ciudad: ''
        // }],
        ciudades: []
    }

    componentDidMount() {
        this.loadCiudades();
    }

    loadCiudades = () => {
        const ciudades = Ciudades.data;
        this.setState({ ciudades: ciudades });
        console.log(ciudades[0]);
    }

    handleInput = e => {
        // const { name, value } = e.target;
        // console.log(name, value);
        // setValues({ ...values, [name]: value })

        // const ciudades = Ciudades.data;
        // this.setState({ ciudades: ciudades });
        // console.log(ciudades[0]);
    }


    // handleSubmit(e) {
    //     values.push({ timestamp: setTimeStamp });
    //     console.log(values);
    //     e.preventDefault();
    //     props.addOrEditLink(values);
    // }
    render() {
        return (
            <div className="container-new col-6">
                <form
                //  onSubmit={this.handleSubmit} 
                >

                    <label htmlFor="ci" >CI *</label>
                    <input id="ci"
                        name="ci"
                        required
                        onChange={this.handleInput}
                        placeholder="Ingrese su ci" />
                    <label htmlFor="nombre">NOMBRE Y APELLIDO *</label>
                    <input id="nombre"
                        onChange={this.handleInput}
                        name="nombre"
                        required
                        placeholder="Nombre y Apellido" />
                    <label htmlFor="direccion">DIRECCIÓN DE RESIDENCIA *</label>
                    <input id="direccion"
                        name="direccion"
                        required
                        onChange={this.handleInput}
                        placeholder="Especifique la dirección" />
                    <label htmlFor="telefono">TELÉFONO *</label>
                    <input id="telefono"
                        name="telefono"
                        required
                        onChange={this.handleInput}
                        placeholder="Ingrese su número de teléfono" />
                    <label htmlFor="ciudad">CIUDAD *</label>
                    <input id="ciudad"
                        name="ciudad"
                        required
                        autoComplete="off"
                        onChange={this.handleInput}
                        placeholder="Especifique su ciudad de residencia" />

                    <button type="submit" className="btn">Crear</button>
                </form>
            </div >
        )
    }

}

