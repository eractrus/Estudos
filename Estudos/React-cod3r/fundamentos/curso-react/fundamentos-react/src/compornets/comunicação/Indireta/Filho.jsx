import React from "react";

export default (props) =>{

    const ageAleatory = () => parseInt(Math.random() * (21))  + 51
    const statusAleatory = () => Math.random() > 0.6


    const func = props.function
    return(
        <div>
            <button onClick={e => {func('Chicó', ageAleatory(), statusAleatory())}}>Resultado</button>
        </div>
    )
}