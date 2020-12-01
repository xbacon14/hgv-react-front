import React from 'react';
import Routes from './routes.jsx';
import Footer from './components/footer';
import SignIn from './pages/Login/signIn';
import './App.css';



function App() {
    // const user = 'a';
    // const user = null;

    return (
        // !user ?
        // <SignIn />
        // :
        <div className="main-container" >

            <div className="content">
                <Routes className="body" />
                <Footer />
            </div>

        </div>)
}

export default App;