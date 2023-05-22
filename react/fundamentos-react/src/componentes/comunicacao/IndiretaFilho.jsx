import React from "react";

export default props => {

    const CDF = props.clicar

    const numAleatorio = (max, min) => parseInt(Math.random() * (max - min)) + min

    return (

        <div>
            <button onClick={_ => CDF('Jorge', numAleatorio(30, 75), true)}>Enviar informações</button>
        </div>
    )
}