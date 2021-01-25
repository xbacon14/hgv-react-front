import React, { Component } from 'react';
// import './style.css'
import Clock from './clock'
// import GetCurrentDate from '../date/getCurrentDate';

export default class Footer extends Component {
    render() {
        return (
            <>
                <div className="footer col-12" >
                    <div className="letras">

                        <p className="footer-text title-title" > Derechos Reservados Italo Golin </p>

                        <Clock />
                    </div>

                </div>
            </>
        );
    }
}