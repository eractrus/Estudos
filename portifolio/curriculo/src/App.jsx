import React from "react";
import './index.css';

import { BrowserRouter as Router } from 'react-router-dom'

import Profile from "./Component/Profile/Profile";
import Main from "./View/Main";

export default () => {
    return (
        <div className="contaierGeneral">
            <Router>
                < Profile />
                <Main />
            </Router>
        </div>
    )
}