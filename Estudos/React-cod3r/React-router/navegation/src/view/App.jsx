import React from "react";
import { BrowserRouter as Router } from 'react-router-dom'

import './App.css'
import Header from '../Component/Layout/Header/Header'
import Main from '../Component/Layout/Main/Main'

const App = () => {
    return (
        <div className="App">
            
            <Router>
                <Header />
                <Main />
            </Router>

        </div>
    )
}

export default App