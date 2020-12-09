import React, { useContext } from 'react';
import { Redirect } from "react-router-dom";
import { auth } from '../../../services/firebase';
// import { useAuth } from '../../../context/AuthContext';

import logo from '../../../assets/login/logo-login@2x.png';
import AuthContext from '../../../context/AuthContext';



const Login = () => {

    const { user } = useContext(AuthContext);

    const uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            auth.GoogleAuthProvider.PROVIDER_ID,
            auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
        ],
        callbacks: {
            signInSuccess: () => false,
        }
    }

    return (
        <>
            {!!user ? (
                <Redirect to={{ params: "/" }} />
            ) : (
                    <div>
                        <p>Por favor, Inicie Sesión</p>
                        <FirebaseAuth uiConfig={uiConfig} firebaseAuth={auth} />
                    </div>
                )}
        </>
    );

    export default Login;

    // useEffect(() => {
    //     auth.onAuthStateChanged((user) => {
    //         setCurrentUser(user);
    //         console.log(user);
    //     })
    // }, [])


    // const {login} = useAuth();

    const [error, setError] = useState('');
    const [currentUser, setCurrentUser] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const history = useHistory();


    const handleEmail = (e) => {
        setEmail(e.target.value);
    }
    const handlePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(email + password)
        try {
            // await login(email, password);
            history.push('/');
        } catch (error) {
            setError('Error en la comprobación de credenciales');
            setTimeout(() => setError(''), 5000)
        }
    }




    // const [email, setEmail] = useState('');
    // const [password, setPassword] = useState('');
    // const [error, setError] = useState(null);
    // const signInWithEmailAndPasswordHandler =
    //     (event, email, password) => {
    //         event.preventDefault();
    //     };

    // const onChangeHandler = (event) => {
    //     const {name, value} = event.currentTarget;

    //     if (name === 'userEmail') {
    //         setEmail(value);
    //     }
    //     else if (name === 'userPassword') {
    //         setPassword(value);
    //     }
    // };


    return (
        <div className="login col-6">
            {error && <p className='error'>{error}</p>}

            <div className="container-login col-10" >
                <img src={logo}
                    alt="HGV Blanco"
                    id="logoblanco" />
                <div className="loginContent ">
                    <p id="textitalo">
                        Ingresá tu <strong> correo </strong>, no esperes más para <strong > informatizarte.  </strong>
                    </p>
                    <div className="email ">
                        <form>
                            <label id="labels" htmlFor="email" > E - MAIL * </label>
                            <input
                                type="email"
                                // id="placeholder"
                                onChange={handleEmail}
                                className="my-1 p-1 w-full placeholder"
                                placeholder="Ingrese su correo"
                            // value={email}
                            // onChange={event => setEmail(event.target.value)}
                            />
                            {/* <button className="btn align-self-end" id="ingresar"
                            // onClick={goLogin} 
                            >
                                INGRESAR </button> */}
                            <label id="labels" htmlFor="password" > PASSWORD * </label>
                            <input
                                type="password"
                                // id="placeholder"
                                onChange={handlePassword}
                                className="my-1 p-1 w-full placeholder"
                                placeholder="Ingrese su password"
                            // value={email}
                            // onChange={event => setEmail(event.target.value)}
                            />
                            <button className="btn align-self-end" id="ingresar"
                                onClick={handleSubmit}
                            >
                                INGRESAR </button>
                        </form >
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Login;