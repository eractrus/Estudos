import './Main.css'

import React from "react";
import { Routes, Route } from "react-router-dom";

import About from '../../../view/Exemples/About/About'
import Home from '../../../view/Exemples/Home/Home'
import Param from '../../../view/Exemples/Param/Param';


export default (props) => {
    return (
        <main>
            <Routes>
                <Route path='/' element={<Home />} >
                </Route>

                <Route path='/about' element={<About />} >
                </Route>

                <Route path='/param/:id' element={<Param />} >
                </Route>
            </Routes>

        </main>
    )
}
