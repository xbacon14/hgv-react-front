import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
// import './style.css';

// import api from '../../services/api';
import logo from '../../../assets/login/logo-login@2x.png';
import './style.css';


export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const signInWithEmailAndPasswordHandler =
        (event, email, password) => {
            event.preventDefault();
        };

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'userEmail') {
            setEmail(value);
        }
        else if (name === 'userPassword') {
            setPassword(value);
        }
    };


    return (
        <>  <div className="container-login col-5">
            <img src={logo}
                alt="HGV Blanco"
                id="logoblanco" />
            <div className="content col-8 ">
                <p id="textitalo">
                    Un <strong> &nbsp; textitalo &nbsp; </strong> para convencerte que ingreses tu <strong > &nbsp; correo &nbsp; </strong>
                </p>
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
                    <button className="btn"
                    // onClick={goLogin} 
                    >
                        INGRESAR </button>
                </form >
            </div>
        </div>
            {/* <div className="mt-8 signIn" >
                <div class="g-signin2" data-onsuccess="onSignIn" >
                </div>
            </div> */}

        </>

    )
}