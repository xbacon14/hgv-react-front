import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import { login } from '../../../services/firebase';

import logo from '../../../assets/login/logo-login.png';

import Spinner from '../../../assets/cargando/rolling.svg';


const Login = () => {

    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const handleSubmit = async (e) => {
        // setLoading(true);
        e.preventDefault();
          await login(email, password).then(
                (value) =>{
                    setLoading(true);
                    history.push("/")
                    console.log(value);
                },
                (reason)=>{
                    if(reason.code==="auth/too-many-requests"){
                        setError("Demasiados intentos, reintente más tarde")
                        setTimeout(() => setError(null), 4000)
                    }
                    if(reason.code==="auth/wrong-password"){
                        setError("Credenciales incorrectas, intente nuevamente")
                        setTimeout(() => setError(null), 4000)
                    }
                    setLoading(false);
                    console.log(reason)
                }
            )
            // .catch(err => {
            //     console.log(err.code)
            //     if(err.code === "auth/wrong-password"){
            //         setError("Credenciales incorrectas")
            //     }
            // })
    }


    return (

        <div className="col-4 card-login">
            <div className="card-body align-content-center">
                <center>
                    <div className="logo">
                        <img src={logo} alt="HGV" />
                    </div>
                </center>
                <center>
                    <div >
                        <div className="espacio-error col-12"> {error && <p className='error slide-in-blurred-left'>{error}</p>}</div>
                        <h1 className="text-jumbo title-login ">Inicie Sesión</h1>
                    </div>
                </center>
                <form onSubmit={handleSubmit}>
                    <center>
                        <div className="form-group">
                            <label htmlFor="emailLabel" className="text-display">Correo</label>
                            <input type="email" required className="form-control" id="emailInput" placeholder="Ingrese su Correo" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="passLabel" className="text-display">Contraseña</label>
                            <input type="password" required className="form-control" id="passInput" placeholder="Ingrese su Contraseña" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                    </center>
                    <center>
                        <button type="submit" className="btn btn-primary btn-lg">Entrar</button>

                    </center>
                </form>
                {loading && <img src={Spinner} alt="Cargando" />}
                <div>
                    <center>
                        <p className="align-text-bottom p-login">No posees una cuenta? Contacte con nostros
                 <a
                        target="popup"
                        href="https://wa.me/595981383068"
                    > aquí</a></p>
                    </center>
                    </div>
            </div>
        </div >
    );

}

export default Login;