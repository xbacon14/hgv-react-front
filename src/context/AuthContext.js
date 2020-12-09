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

  useEffect(() => {
    auth.onAuthStateChanged(setUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;

