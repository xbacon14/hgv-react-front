import React, { useState } from 'react';

import api from '../../services/api';
// import './Login.css';


export default function Login({history}) {

    const [email, setEmail] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        const response = await api.post('/sessions', { email });

        const { _id } = response.data;
        console.log(_id);
        localStorage.setItem('user', _id);
        history.push('/empresa');

        
    }

    return (
        <>
            <p>
                Un < strong > &nbsp; textitalo &nbsp; </strong>     para convencerte que ingreses tu <strong > &nbsp; correo &nbsp; </strong >
            </p>
            <form onSubmit={handleSubmit} >
                <label htmlFor="email" > E - mail * </label>
                <input id="email"
                    type="email"
                    placeholder="Ingrese su correo"
                    value={email}
                    onChange={event => setEmail(event.target.value)} />
                <button className="btn"
                    type="submit"> Ingresar </button>
            </form >
        </>

    )
}