import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import { useAuth } from '../../../context/AuthContext';

import logo from '../../../assets/login/logo-login@2x.png';



const Login = () => {

    const { login } = useAuth();
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmail = () => setEmail(e.target.value);
    const handlePass = () => setPassword(e.target.value);

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
        <div className="card">
            <div className="card-header">
                {error && <p className='error'>{error}</p>}
                <h1>Iniciar Sesión</h1>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder="Correo" onChange={handleEmail} />
                    <input type="password" placeholder="Contraseña" onChange={handlePass} />
                    <input type="submit" value='Iniciar Sesión' />
                </form>
                {loading && <img src={Spinner} alt="Cargando" />}
                <p>No posees una cuenta? Contacte con nostros <a href="https://www.facebook.com/italo.golin.5">www.italus.com</a></p>
            </div>
        </div>
    );

}

export default Login;