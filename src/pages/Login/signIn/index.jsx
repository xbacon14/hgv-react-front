import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

// import api from '../../services/api';
import logo from '../../../assets/login/logo-login@2x.png';
import './style.css';


export default function Login() {

    const { login } = useAuth();

    const { error, setError } = useState('');
    const { email, setEmail } = useState('');
    const { password, setPassword } = useState('');

    const history = useHistory();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await login(email, password);
            history.push('/');
        } catch (error) {
            setError('Error en la comprobación de credenciales');
            setTimeout(() => setError(''), 5000)
        }
    }

    const handleEmail = (e) => setEmail(e.target.value);
    const handlePassword = (e) => setPassword(e.target.value);


    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [error, setError] = useState(null);
    // const signInWithEmailAndPasswordHandler =
    //     (event, email, password) => {
    //         event.preventDefault();
    //     };

    // const onChangeHandler = (event) => {
    //     const { name, value } = event.currentTarget;

    //     if (name === 'userEmail') {
    //         setEmail(value);
    //     }
    //     else if (name === 'userPassword') {
    //         setPassword(value);
    //     }
    // };


    return (
        <div className="login">
            {error && <p className='error'>{error}</p>}
            <img src={logo}
                alt="HGV Blanco"
                id="logoblanco" />
            <div className="container-login col-4" >

                <div className="content">
                    <p id="textitalo">
                        Ingresá tu <strong> correo </strong>, no esperes más para <strong > informatizarte.  </strong>
                    </p>
                    <div className="email col-12">
                        <form>
                            <label id="email" htmlFor="email" > E - MAIL * </label>
                            <input
                                type="email"
                                id="placeholder"
                                className="my-1 p-1 w-full"
                                placeholder="Ingrese su correo"
                            // value={email}
                            // onChange={event => setEmail(event.target.value)}
                            />
                            <button className="btn align-self-end" id="ingresar"
                            // onClick={goLogin} 
                            >
                                INGRESAR </button>
                            <label id="password" htmlFor="password" > E - MAIL * </label>
                            <input
                                type="password"
                                id="placeholder"
                                className="my-1 p-1 w-full"
                                placeholder="Ingrese su password"
                            // value={email}
                            // onChange={event => setEmail(event.target.value)}
                            />
                            <button className="btn align-self-end" id="ingresar"
                            // onClick={goLogin} 
                            >
                                INGRESAR </button>
                        </form >
                    </div>
                </div>
            </div>
        </div>

    )
}