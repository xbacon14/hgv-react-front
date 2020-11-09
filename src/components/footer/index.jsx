import React, { Component } from 'react';
import './style.css'
import Clock from './clock'
// import GetCurrentDate from '../date/getCurrentDate';

export default class Footer extends Component {
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