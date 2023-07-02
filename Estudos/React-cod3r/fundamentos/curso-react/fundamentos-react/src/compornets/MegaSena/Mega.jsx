import React from "react";
import Logica from "./Logica";
import './style.css'

export default (props) => {

    const test = Logica.map((item) => {
        return (
            <span>{item +' '}</span>
        )

    })
    return (
        <div className="containerMegaSena">
            <span>{test}</span>
            <button onClick={e => window.location.reload()} className="btnMegaSena">Sortear</button>
        </div>
    )
}