import React, { useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './assets/navbar/logo-verde.png';

import SignIn from './pages/Login/signIn/index';
import Inicio from './pages/Inicio/index';
// import Footer from './components/footer/index';
import Registro from './pages/Registros/index';
import Account from './pages/Account/index';
import SeleccionarEmpresa from './pages/SeleccionarEmpresa';
import CrearEmpresa from './pages/CrearEmpresa';
import Reportes from './pages/Reportes';
import { auth } from './services/firebase';
import { UserContext } from "./providers/UserProvider";

export default function Routes() {

    return (
        <Router>
            <div className="container">
                <div className="navbar" id="nav-bar">
                    <img src={logo} alt="Logo verde" id="logoverde" />
                    <Link to="/" className="btn" >
                        Inicio
                    </Link>
                    <Link to="/registro" className="btn" >
                        Registro de Clientes
                    </Link>
                    <Link to="/account" className="btn">
                        Mi Cuenta
                    </Link>
                    <Link to="/reportes" className="btn" >
                        Reportes
                    </Link>
                    <Link to=""  className="btn" id="logout">
                        LOGOUT
                    </Link>
                </div>
                <hr />
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
                {/* <Footer /> */}
            </div>
        </Router>
    );
}