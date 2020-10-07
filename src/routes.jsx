import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './assets/navbar/logo-verde.png';

import SignIn from './pages/Login/signIn/index';
import Inicio from './pages/Inicio/index';
import Registro from './pages/Registros/index';
import Account from './pages/Account/index';
// import SeleccionarEmpresa from './pages/SeleccionarEmpresa';
import CrearEmpresa from './pages/CrearEmpresa';
import Reportes from './pages/Reportes';
// import { auth } from './services/firebase';
// import { UserContext } from "./providers/UserProvider";

export default function Routes() {

    return (
        <Router>
            <div className="container">
                <nav className="navbar nav-bar navbar-expand-lg navbar-light bg-light col-12 " id="nav-bar">
                    <img src={logo} alt="Logo verde" id="logoverde" />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">

                        <Link to="/" className="btn btn-header" >
                            Inicio
                    </Link>
                        <Link to="/registro" className="btn btn-header" >
                            Registro de Clientes
                    </Link>
                        <Link to="/account" className="btn btn-header">
                            Mi Cuenta
                    </Link>
                        <Link to="/reportes" className="btn btn-header" >
                            Reportes
                    </Link>
                        <Link to="" className="btn-header" id="logout">
                            LOGOUT
                    </Link>
                    </div>
                </nav>
                <Switch>
                    <Route path="/" exact>
                        <Inicio />
                    </Route>
                    <Route path="/account">
                        <Account />
                    </Route>
                    <Route path="/crear">
                        <CrearEmpresa />
                    </Route>
                    <Route path="/registro">
                        <Registro />
                    </Route>
                    <Route path="/reportes">
                        <Reportes />
                    </Route>
                    <Route path="/signIn">
                        <SignIn />
                    </Route>


                </Switch>
            </div>
        </Router>
    );
}