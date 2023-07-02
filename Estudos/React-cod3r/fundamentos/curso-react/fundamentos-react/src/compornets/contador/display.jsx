import React, { useState } from "react";
import './contador.css'

export default () => {

    const [value, setValor] = useState(0)

    const contagem = (e, type) => {
     
        if (type == 'dec') {
            
            setValor(value - 1)
        } else {
            setValor(value + 1)
        }
    }

    return (

        <div className="containerContador">
            <button onClick={e => contagem(e, 'dec')} className="btnIncr">-</button>

            <input className="contador" value={value} type="text" disabled />

            <button onClick={e => contagem(e, 'incr')} className="btnIncr">+</button>
        </div>
    )
}