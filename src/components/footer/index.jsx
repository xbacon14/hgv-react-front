import React, { Component } from 'react';
import './style.css'
import GetCurrentDate from '../date/getCurrentDate';

export default class Footer extends Component {
    render() {
        return (
            <>
                <div id="espacio"></div>
                <div className="footer" >
                    <div className="letras">

                        <p > Derechos Reservados Italo Golin </p>

                        {/* <span> 13:02:20 - 06/07/2020 </span> */}
                        <span> <GetCurrentDate />  </span>
                    </div>

                </div>
            </>
        );
    }
}