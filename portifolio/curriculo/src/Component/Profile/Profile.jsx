import React from "react";
import './Profile.css'


import Name from "./Name/Name";
import Contact from "./Contact/Contact";
import Controls from "./Controls/Controls";

export default () => {
    return (
        <nav className="containerProfile">
            <Name />
            <Contact />
            <Controls />
        </nav>
    )
}