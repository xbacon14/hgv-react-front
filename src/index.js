import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
// import Login from './pages/Login/index';
import './services/firebase';
import { AuthProvider } from "./context/AuthContext";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
    <BrowserRouter>
        <AuthProvider>
            < App />
        </AuthProvider>
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA