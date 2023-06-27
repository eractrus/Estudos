import React from "react";

export default (props) => {
    const par = props.valor % 2 === 0
    return (
        <div>
            { par ? <span>Par</span> : <span>Impar</span> }
        </div>
    )
}