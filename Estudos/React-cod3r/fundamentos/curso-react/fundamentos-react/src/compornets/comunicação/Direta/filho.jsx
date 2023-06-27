import React from "react";


export default (props) => {
    const name = props.name
    const age = props.age
    const status = props.status
    return (
        <div>
            <span>{name} / </span>
            <span> {age} / </span>
            <span>{status ? 'Aprovado' : 'Reprovado'} </span>

        </div>
    )
}