import React from "react";

export default props => {
    return (
        <div>
            <p>Nome: {props.nome}  </p>
            <p> idade: {props.idade} </p>
            <p>Maior de idade? {props.bool ? 'verdadeiro' : 'Falso'} </p>
            <br />
        </div>
    )
}