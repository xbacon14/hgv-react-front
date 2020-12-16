import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { logout, auth } from "./services/firebase";
import { AuthProvider } from './context/AuthContext';
import PrivateRoute from './services/PrivateRoute';
import logo from './assets/login/logo-login.png';

import SignIn from './pages/Login/signIn/index';
import Inicio from './pages/Inicio/index';
import Registro from './pages/Registros/index';
import Account from './pages/Account/index';
import CrearEmpresa from './pages/CrearEmpresa';
import Reportes from './pages/Reportes';
import Footer from './components/footer';


const Routes = () => {

    // const history = useHistory();
    const [currentUser, setCurrentUser] = useState({});

    useEffect(() => {
        auth.onAuthStateChanged(setCurrentUser);
    }, [])

    const handleLogout = () => {
        try {
            console.log("buscando")
            logout();
        } catch (error) {
            console.log(error);
        } finally {
            console.log("finally")
        }
    }

    return (
        <AuthProvider>
            <Router>
                <div className="container">
                    {!currentUser ? <div></div> :
                        <div className="navegator">
                            <nav className="navbar nav-bar navbar-expand-lg navbar-light bg-light col-10 " id="nav-bar">
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
                                    <Link to="" className="btn-header btn btn-danger"
                                        id="logout"
                                        onClick={handleLogout}
                                    >
                                        LOGOUT
                                     </Link>
                                </div>
                            </nav>
                        </div>}
                    <Switch>
                        <PrivateRoute path="/" exact component={Inicio} />
                        <PrivateRoute path="/account" component={Account} />
                        <PrivateRoute path="/crear" component={CrearEmpresa} />
                        <PrivateRoute path="/registro" component={Registro} />
                        <PrivateRoute path="/reportes" component={Reportes} />
                        <Route path="/signIn" exact component={SignIn} />
                        {/* <Route path="/error404" component={Error404} /> */}


                    </Switch>
                </div>
            </Router>

            {!currentUser ? <div></div> : <Footer />}

        </AuthProvider>
    );
    // } else { return (<SignIn />) }
}

export default Routes;