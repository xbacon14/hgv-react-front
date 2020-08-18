import React, {Link} from 'react';
import logo from '../../assets/navbar/logo-verde.png';

export default function Header() {
    return (
    <>
    <div className="justify-content-center align-items-center" id="nav-bar">
        <img src={logo} alt="Logo verde" id="logoverde" />
        <Link to="/inicio" className="btn" >
            Inicio
    </Link>
        <Link to="/registros" className="btn" >
            Registro de Clientes
    </Link>
        <Link to="/account" className="btn">
            Mi Cuenta
    </Link>
        <Link to="/registros" className="btn" >
            Registros
    </Link>
        <Link to="/logout" className="btn" id="logout">
            LOGOUT
    </Link>
    </div>
    </>)
}