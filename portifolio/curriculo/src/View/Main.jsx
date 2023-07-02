import React from "react";
import {Routes,Route} from 'react-router-dom'

import './Main.css'

import About from "../Component/About/About";
import Projetc from "../Component/Project/Projetc";

export default () => {
    return(
        <div className="containerMain">
            <Routes>
                <Route path="/about" element={<About/>} />
                <Route path="/project" element={<Projetc/>} />
            </Routes>
        </div>
    )
}