import React from "react";
import './card.css'

export default (props) => {

    return (

        <div className="card">

            <div className="containerTitle">
                <h2 className="titleCard">{props.titleCard}</h2>
            </div>

            <div className="containerContent">
                <p className="content">{props.children}</p>
            </div>

        </div>
    )
}