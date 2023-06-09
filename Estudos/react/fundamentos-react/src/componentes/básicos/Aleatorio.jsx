import React from "react";

export default function Aleatorio(props) {

    const numeroAleatorio = Math.floor(Math.random() * (props.ValorMaximo - props.ValorMinimo) + props.ValorMinimo)

    return (
        <h4>
            Número aleatório entre 100 e 5000:  <strong>"{numeroAleatorio}"</strong>
        </h4>
    )

}