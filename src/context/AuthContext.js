// import React, { createContext, useState, useEffect, useContext } from 'react';
// import { auth } from '../services/firebase';

// const AuthContext = createContext({});

// export const useAuth = () => useContext(AuthContext);
// export const AuthProvider = (props) => {

//   const [currentUser, setCurrentUser] = useState({});

//   useEffect(() => {
//     auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//       console.log(user);
//     })
//   }, [])

//   const signup = (email, senha) => {
//     return auth.createUserWithEmailAndPassword(email, senha);
//   }

//   const login = (email, senha) => {
//     return auth.signInWithEmailAndPassword(email, senha);
//   }

//   const logout = () => {
//     return auth.signOut();
//   }

//   // const value = { signup, logout, login, currentUser };
//   return (
//     <AuthContext.Provider value={value}>
//       {props.children}
//     </AuthContext.Provider>
//   )
// }

import React, { useEffect, useState } from 'react';
import { auth } from "../services/firebase";

export const AuthContext = React.createContext();

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const provider = app.auth.FacebookAuthProvider();


  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  const signInWithPopup = () => auth.signInWithPopup(provider).then((result) => {
    var token = result.credential.accessToken;
    var user = result.user;
  }).catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.errorMessage;
    var email = error.email;
    var credential = error.credential;
    console.log(errorCode + errorMessage + email + credential);

  });

  const signOutFacebook = () => auth.signOut().then(() => {
    console.log("Se cerró la sesión correctamente");
  }).catch((error) => {
    console.log("Ha ocurrido un error");
  });




  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

