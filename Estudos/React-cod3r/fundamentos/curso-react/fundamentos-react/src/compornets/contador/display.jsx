import React, { useState } from "react";
import './contador.css'

export default () => {

    const [value, setValor] = useState(0)

    const dec = (e) => {
        setValor(e.target.value -= 1)
    }

    const incr = (e) => {
        setValor(e.target.value += 1 )
    }

    return (
        <div>
            <button onClick={dec} className="btnIncr">-</button>
            <input className="contador" value={value} type="text" disabled />
            <button onClick={incr} className="btnIncr">+</button>
        </div>
    )
}