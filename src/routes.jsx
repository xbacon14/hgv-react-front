import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import logo from './assets/navbar/logo-verde.png';

import SignIn from './pages/Login/signIn/index';
import Inicio from './pages/Inicio/index';
import Registro from './pages/Registros/index';
import Account from './pages/Account/index';
import CrearEmpresa from './pages/CrearEmpresa';
import Reportes from './pages/Reportes';
import Footer from './components/footer';
import { auth } from './services/firebase';
// import Error404 from './components/error/404'



import AuthProvider from './context/AuthContext';


const Routes = () => {

    // const { logout } = useAuth();

    // const currentUser = auth.currentUser;
    // const handleLogout = async () => {
    //     try { await logout(); } catch (error) {

    //         console.log(error);
    //     }
    // }

    // if (currentUser) {
        return (
            <AuthProvider>
                <Router>
                    <div className="container">
                        <div className="navegator">
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
                                        Registro de Personas
                                     </Link>
                                    <Link to="/account" className="btn btn-header">
                                        Mi Cuenta
                                     </Link>
                                    <Link to="/reportes" className="btn btn-header" >
                                        Reportes
                                     </Link>
                                    <Link to="" className="btn-header"
                                        id="logout"
                                        // onClick={handleLogout}
                                    >
                                        LOGOUT
                                     </Link>
                                </div>
                            </nav>
                        </div>
                        <Switch>
                            <Route path="/" exact component={Inicio} />
                            <Route path="/account" component={Account} />
                            <Route path="/crear" component={CrearEmpresa} />
                            <Route path="/registro" component={Registro} />
                            <Route path="/reportes" component={Reportes} />
                            <Route path="/signIn" component={SignIn} />
                            {/* <Route path="/error404" component={Error404} /> */}


                        </Switch>
                    </div>
                </Router>
                <Footer />

            </AuthProvider>
        );
    // } else { return (<SignIn />) }
}

export default Routes;