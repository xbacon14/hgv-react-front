import React, { useContext } from 'react';
import { Redirect } from "react-router-dom";
import { auth } from '../../../services/firebase';
// import { useAuth } from '../../../context/AuthContext';

import logo from '../../../assets/login/logo-login@2x.png';
import { AuthContext, signInWithPopup } from '../../../context/AuthContext';



const Login = () => {

    const { user } = useContext(AuthContext);


    return (
        <>
            {!!user ? (
                <Redirect to={{ params: "/" }} />
            ) : (
                    <div>
                        <p>Por favor, Inicie Sesión</p>
                        
                    </div>
                )}
        </>
    );

}

export default Login;