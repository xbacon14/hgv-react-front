import React from 'react';
import Routes from './routes';
import Footer from './components/footer';
import SignIn from './pages/Login/signIn';
import './App.css';



function App() {
    const user = 'a';

    return (
        user ?
            <SignIn />
            :
            <div className="container" >

                <div className="content">
                    <Routes />
                    <Footer />
                </div>

            </div>)
}

export default App;