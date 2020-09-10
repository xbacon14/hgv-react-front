import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import logo from './assets/navbar/logo-verde.png';

// import Login from './pages/Login/index';
import Inicio from './pages/Inicio/index';
// import Footer from './components/footer/index';
// import Registros from './pages/Registros/index';
import Account from './pages/Account/index';
// import Home from './pages/Home';
import SeleccionarEmpresa from './pages/SeleccionarEmpresa';
import CrearEmpresa from './pages/CrearEmpresa';


export default function Routes() {
    return (
        < Router >
            <div className="container">
                <div className="justify-content-center align-items-center" id="nav-bar">
                    <img src={logo} alt="Logo verde" id="logoverde" />
                    <Link to="/" className="btn" >
                        Inicio
                    </Link>
                    <Link to="/crear" className="btn" >
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
                <hr />
                <Switch>
                    <Route path="/" exact>
                        <Inicio />
                    </Route>
                    {/* <Route path="/login">
                        <Login />
                    </Route> */}
                    <Route path="/account">
                        <SeleccionarEmpresa />
                    </Route>
                    <Route path="/crear">
                        <CrearEmpresa />
                    </Route>

                    <Route path="/clientes">
                        <Clientes />
                    </Route>

                    {/* 
                    <Route path="/account">
                        <MiCuenta />
                    </Route>
                    <Route path="/registros">
                        <Registros />
                    </Route>
                    <Route path="/logout">
                        <Logout />
                    </Route> */}


                </Switch>
                {/* <Footer /> */}
            </div>
        </Router>
    );
}