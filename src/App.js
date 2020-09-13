import React from 'react';
import Routes from './routes';
import Footer from './components/footer';
import './App.css';

function App() {


    return (
        <div className="container" >


            <div className="content">
                <Routes />
                <Footer />
            </div>

        </div>);
}

export default App;