import React, { Link, Component } from 'react';
import logo from '../../assets/navbar/logo-verde.png';


export default class Header extends Component {

    render() {
        return (
            <>
                <nav className="navbar nav-bar navbar-expand-lg navbar-light bg-light col-12 " id="nav-bar">
                    <img src={logo} alt="Logo verde" id="logoverde" />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
{/* 
                        <Link to="/" className="btn btn-header" >
                            Inicio
                         </Link>
                        <Link to="/registro" className="btn btn-header" >
                            Registro de Personas
                         </Link>
                        <Link to="/account" className="btn btn-header">
                            Mi Cuenta
                        </Link>
                        <Link to="/reportes" className="btn btn-header" >
                            Reportes
                         </Link>
                        <Link to="/" className="btn-header" id="logout">
                            LOGOUT
                        </Link> */}
                    </div>
                </nav>
            </>
        );
    }
}