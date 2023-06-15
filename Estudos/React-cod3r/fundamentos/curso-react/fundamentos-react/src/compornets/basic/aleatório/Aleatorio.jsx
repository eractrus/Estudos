import React from "react";

export default (props) => {
    
    let value = Math.random() * props.value
    value = Math.round(value)

    return (
        <div>
            <h3>{value}</h3>
        </div>
    )
}