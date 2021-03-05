import React from 'react';
import Routes from './routes.jsx';

import './pages/style/style.css';

function App() {
    // const user = 'a';
    // const user = null;


    return (
        <div className="main-container" >

            <div className="content">
                <Routes className="body" />
            </div>

        </div>)
}

export default App;