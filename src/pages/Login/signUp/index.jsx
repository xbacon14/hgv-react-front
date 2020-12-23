import React, { useState } from "react";
import { auth } from '../../../services/firebase';

import logo from '../../../assets/login/logo-login.png';
import Spinner from '../../../assets/cargando/spinner.svg'

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const createUserWithEmailAndPasswordHandler = (event, email, password) => {
    event.preventDefault();
    setEmail("");
    setPassword("");
    setDisplayName("");
  }
  const onChangeHandler = event => {
    const { name, value } = event.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    } else if (name === "userPassword") {
      setPassword(value);
    } else if (name === "displayName") {
      setDisplayName(value);
    }
  }

  const handleSubmit = () =>{
setLoading(true)
  }

  return (

    <div className="col-4 card-login">
      {error && <p className="error">{error}</p>}
      <div className="card-body align-content-center">
        <center>
          <div className="logo">
            <img src={logo} alt="HGV"/>
          </div>
        </center>
        <center>
          <div>
          {error && <p className='error'>{error}</p>}
          <h1 className="title-display title-login ">Crear cuenta</h1>
          </div>
        </center>
        <form onSubmit={handleSubmit}>
        <center>
                        <div className="form-group">
                            <label htmlFor="emailLabel" className="text-headline">Correo</label>
                            <input type="email" className="form-control" id="emailInput" placeholder="Ingrese su Correo" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)} />
                            <label htmlFor="passLabel" className="text-headline">Contraseña</label>
                            <input type="password" className="form-control" id="passInput" placeholder="Ingrese su Contraseña" onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        </center>
                    <center>
                        <button type="submit" className="btn btn-primary btn-lg">Entrar</button>

                    </center>
                </form>
                {loading && <img src={Spinner} alt="Cargando" />}

      </div>
    </div>
    // <div className="mt-8">
    //   <h1 className="text-3xl mb-2 text-center font-bold">Sign Up</h1>
    //   <div className="border border-blue-400 mx-auto w-11/12 md:w-2/4 rounded py-8 px-4 md:px-8">
    //     {error !== null && (
    //       <div className="py-4 bg-red-600 w-full text-white text-center mb-3">
    //         {error}
    //       </div>
    //     )}
    //     <form className="">
    //       <label htmlFor="displayName" className="block">
    //         Display Name:
    //       </label>
    //       <input
    //         type="text"
    //         className="my-1 p-1 w-full "
    //         name="displayName"
    //         value={displayName}
    //         placeholder="E.g: Faruq"
    //         id="displayName"
    //         onChange={event => onChangeHandler(event)}
    //       />
    //       <label htmlFor="userEmail" className="block">
    //         Email:
    //       </label>
    //       <input
    //         type="email"
    //         className="my-1 p-1 w-full"
    //         name="userEmail"
    //         value={email}
    //         placeholder="E.g: faruq123@gmail.com"
    //         id="userEmail"
    //         onChange={event => onChangeHandler(event)}
    //       />
    //       <label htmlFor="userPassword" className="block">
    //         Password:
    //       </label>
    //       <input
    //         type="password"
    //         className="mt-1 mb-3 p-1 w-full"
    //         name="userPassword"
    //         value={password}
    //         placeholder="Your Password"
    //         id="userPassword"
    //         onChange={event => onChangeHandler(event)}
    //       />
    //       <button
    //         className="bg-green-400 hover:bg-green-500 w-full py-2 text-white"
    //         onClick={event => {
    //           createUserWithEmailAndPasswordHandler(event, email, password);
    //         }}
    //       >
    //         Sign up
    //       </button>
    //     </form>
    //     <p className="text-center my-3">or</p>
    //     <button
    //       className="bg-red-500 hover:bg-red-600 w-full py-2 text-white"
    //     >
    //       Sign In with Google
    //     </button>
    //     <p className="text-center my-3">
    //       Already have an account?{" "}
    //       <Link to="/" className="text-blue-500 hover:text-blue-600">
    //         Sign in here
    //       </Link>
    //     </p>
    //   </div>
    // </div>
  );
};
export default SignUp;