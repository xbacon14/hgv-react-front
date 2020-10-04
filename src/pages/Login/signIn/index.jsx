import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';

// import api from '../../services/api';
import logo from '../../../assets/login/logo-login@2x.png';
import personas from '../../../assets/login/personas.png'
import './style.css';

// import styled from 'styled-components';

// const Content = styled.div`
//     background-image: url(${personas});
//     width: 1366px;
// `;


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
        <div className="login">
            <img src={logo}
                alt="HGV Blanco"
                id="logoblanco" />
            <div className="container-login col-4" >

                <div className="content">
                    <p id="textitalo">
                        Ingresá tu <strong> correo </strong>, no esperes más para <strong > informatizarte.  </strong>
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
                        <button className="btn align-self-end" id="ingresar"
                        // onClick={goLogin} 
                        >
                            INGRESAR </button>
                    </form >
                </div>
            </div>
        </div>

    )
}