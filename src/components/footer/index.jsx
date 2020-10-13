import React, { Component } from 'react';
import './style.css'
import Clock from './clock'
// import GetCurrentDate from '../date/getCurrentDate';

export default class Footer extends Component {

    // getHora() {
    //     var ahora = this.state.fecha;
    //     console.log(ahora);
    //     // var ahoritalo = new Intl.DateTimeFormat('es-PY', { year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(ahora);
    //     var fechitalo = new Intl.DateTimeFormat('es-PY', { year: 'numeric', month: '2-digit', day: '2-digit' }).format(ahora);
    //     var hora = new Intl.DateTimeFormat('es-PY', { hour: '2-digit', minute: '2-digit', second: '2-digit' }).format(ahora);
    //     this.timerID = setInterval(
    //         () => hora, 1000
    //     )
    //     // console.log(ahoritalo);
    //     var fecha = fechitalo + " - " + hora;
    //     return fecha;
    //     // this.setState({ fecha: fecha })
    // }

    render() {
        return (
            <>
                <div id="espacio"></div>
                <div className="footer" >
                    <div className="letras">

                        <p > Derechos Reservados Italo Golin </p>

                        <Clock />
                        {/* {console.log(this.state.fecha)} */}
                        {/* <span> 13:02:20 - 06/07/2020 </span> */}
                        {/* <span> <GetCurrentDate />  </span> */}
                        {/* <span>{this.state.fecha.toString()} </span> */}
                    </div>

                </div>
            </>
        );
    }
}