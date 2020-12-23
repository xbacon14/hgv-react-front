// import React, { createContext, useContext, useState, useEffect } from 'react';
// import { auth } from '../services/firebase';

// const AuthContext = createContext();

// export const useAuth = () => useContext(AuthContext);

// export const AuthProvider = (props) => {
//   const [currentUser, setCurrentUser] = useState({});

//   useEffect(() => {
//     auth.onAuthStateChanged((user) => {
//       setCurrentUser(user);
//       console.log(user);
//     })
//   }, [])

//   const signup = (email, password) => {
//     return auth.createUserWithEmailAndPassword(email, password);
//   }

//   const login = (email, password) => {
//     return auth.signInWithEmailAndPassword(email, password);
//   }

//   const logout = () => auth.signOut();

//   const value = {
//     currentUser,
//     login,
//     logout,
//     signup
//   };
//   return (
//     <AuthContext.Provider value={value}>
//       {props.children}
//     </AuthContext.Provider>
//   )
// }

// MODELO 2 DEL CONTEXT
// import React, { useState } from 'react';
// import { firebaseAuth } from './AuthReducer';
// //firebase reducer

// export const Auth = React.createContext();

// export const AuthProvider = (props) => {
//   const [user, setUser] = useState({});


//   const [state, dispatch] = React.useReducer(firebaseAuth, user);
//   const value = { state, dispatch };

//   return <Auth.Provider value={value}>
//     {props.children}
//   </Auth.Provider>
// }

// MODELO 2 DEL CONTEXT
import React, { useEffect, useState, createContext } from 'react';
import { auth } from '../services/firebase';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    auth.onAuthStateChanged(setCurrentUser)
    const user = localStorage.getItem("fbase_key")
    if (user) {
      setCurrentUser(user);
      console.log(user)
    }
  }, [])

  return (
    <AuthContext.Provider value={{ currentUser }}>
      {children}
    </AuthContext.Provider>
  )
}