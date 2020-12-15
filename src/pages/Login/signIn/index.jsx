import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
// import { useAuth } from '../../../context/AuthContext';
import { login } from '../../../services/firebase';

// import logo from '../../../assets/login/logo-login@2x.png';

import Spinner from '../../../assets/cargando/spinner.svg'


const Login = () => {

    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePass = (e) => setPassword(e.target.value);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            await login(email, password);
            setLoading(true);
            history.push('/');
        } catch (error) {
            setLoading(false);
            setError('Credenciales incorrectas');
            setTimeout(() => setError(''), 5000);
        }
    }

    return (
        <div className="card col-6">
            <div >
                {error && <p className='error'>{error}</p>}
                <h1 className="title-display ">Inicie Sesión</h1>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label htmlFor="emailLabel">Correo</label>
                        <input type="email" className="form-control" id="emailInput" placeholder="Ingrese su Correo" aria-describedby="emailHelp" onChange={handleEmail} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="passLabel">Contraseña</label>
                        <input type="password" className="form-control" id="passInput" placeholder="Ingrese su Contraseña" onChange={handlePass} />
                    </div>
                    <button type="submit" className="btn btn-success">Iniciar Sesión</button>
                    <div className="form-group"></div>
                </form>
                {loading && <img src={Spinner} alt="Cargando" />}
                <p>No posees una cuenta? Contacte con nostros <a href="https://www.facebook.com/italo.golin.5">www.italus.com</a></p>
            </div>
        </div>
    );

}

export default Login;