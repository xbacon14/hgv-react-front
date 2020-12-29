import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { login } from '../../../services/firebase';

import logo from '../../../assets/login/logo-login.png';

import Spinner from '../../../assets/cargando/spinner.svg'


const Login = () => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        try {
            const response = await login(email, password);
            console.log(response);
            setLoading(false);
            history.push("/");

        } catch (error) {
            setError("Credenciales invalidas");
            setTimeout(() => setError(''), 4000);
        }
        // let response = await login(email, password);
        // if (response.code === "auth/wrong-password") {
        //     var error = "Error en las credenciales"
        //     console.log(error);
        //     setError(error);
        //     setTimeout(() => setError(''), 4000);
        // } else {
        // console.log(response)
        // return dispatch({
        //     type: "SIGNIN",
        //     payload: response
        // })
        // }
        // console.log("Redireccionando");
    }


    return (

        <div className="col-4 card-login">
            {error && <p className='error'>{error}</p>}
            <div className="card-body align-content-center">
                <center>
                    <div className="logo">
                        <img src={logo} alt="HGV" />
                    </div>
                </center>
                <center>
                    <div >
                        {error && <p className='error'>{error}</p>}
                        <h1 className="title-display title-login ">Inicie Sesión</h1>
                    </div>
                </center>
                <form onSubmit={handleSubmit}>
                    <center>
                        <div className="form-group">
                            <label htmlFor="emailLabel" className="text-headline">Correo</label>
                            <input type="email" className="form-control" id="emailInput" placeholder="Ingrese su Correo" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="passLabel" className="text-headline">Contraseña</label>
                            <input type="password" className="form-control" id="passInput" placeholder="Ingrese su Contraseña" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        </center>
                    <center>
                        <button type="submit" className="btn btn-primary btn-lg">Entrar</button>

                    </center>
                </form>
                {loading && <img src={Spinner} alt="Cargando" />}
                <center><p className="align-text-bottom p-login">No posees una cuenta? Contacte con nostros
                 <a 
                 target="popup"
                 href="https://wa.me/595981383068"
                 > aquí</a></p></center>
            </div>
        </div >
    );

}

export default Login;