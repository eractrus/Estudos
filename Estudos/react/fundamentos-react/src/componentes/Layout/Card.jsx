
import "./Card.css"
import React from "react";

export default function (props) {
    const StyleCard = {
        backgroundColor: props.cor || '#000',
        borderColor: props.cor || "#000",
    }
    return (
        <div className="card" style={StyleCard}>
            <div className="titulo">{props.titulo}</div>

            <div className="conteudo">
                {props.children}
            </div>

        </div>
    )
}