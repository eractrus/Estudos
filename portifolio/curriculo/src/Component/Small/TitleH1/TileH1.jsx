import React from "react";
import './TitleH1.css'

export default (props) => {
    return (
        <div>
            <h1 className="TitleBig">{props.title}</h1>
            <hr />
        </div>
    )
}