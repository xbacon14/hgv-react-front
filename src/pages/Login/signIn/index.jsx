import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { Auth } from '../../../context/AuthContext';
import { login } from '../../../services/firebase';

// import logo from '../../../assets/login/logo-login@2x.png';

import Spinner from '../../../assets/cargando/spinner.svg'


const Login = () => {

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { state, dispatch } = React.useContext(Auth);



    const handleSubmit = async (e) => {
        e.preventDefault();


        let response = await login(email, password);
        if (response.hasOwnProperty("message")) {
            console.log(response);
        } else {
            console.log(response)
            return dispatch({
                type: "SIGNIN",
                payload: response
            })
        }
        console.log(state.user);
        history.push('/inicio');
    }


    return (

        <div className="card col-6 card-login">
            <div >
                {error && <p className='error'>{error}</p>}
                <h1 className="title-display title-login ">Inicie Sesión</h1>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="emailLabel">Correo</label>
                        <input type="email" className="form-control" id="emailInput" placeholder="Ingrese su Correo" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passLabel">Contraseña</label>
                        <input type="password" className="form-control" id="passInput" placeholder="Ingrese su Contraseña" onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-success">Iniciar Sesión</button>
                    <div className="form-group"></div>
                </form>
                {loading && <img src={Spinner} alt="Cargando" />}
                <p>No posees una cuenta? Contacte con nostros <a href="https://wa.me/595981383068"> aquí</a></p>
            </div>
        </div>
    );

}

export default Login;