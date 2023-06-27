import React from "react";
import Filho from "./filho";

export default (props) => {
    return (
        <Filho name={props.name} age={props.age} status={props.status} />
    )
}