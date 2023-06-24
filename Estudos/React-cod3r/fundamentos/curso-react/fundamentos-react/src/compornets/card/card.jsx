import React from "react";
import './card.css'

export default (props) => {

    const cardExercise = {
        backgroundColor: props.color || 'darkcyan',
        borderColor: props.color || 'darkcyan',
    }

    return (

        <div className="card" style={cardExercise} >

            <div className="containerTitle" >
                <h2 className="titleCard">{props.titleCard}</h2>
            </div>

            <div className="containerContent">
                <p className="content">{props.children}</p>
            </div>

        </div>
    )
}