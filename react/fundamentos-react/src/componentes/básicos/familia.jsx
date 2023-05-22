import React, { cloneElement } from "react";

export default function familia(props) {

    return (

        <div>

           {/* {React.cloneElement(props.children, props)} propiedade para clonar um elemento com passagem de propiedade*/}

           {React.Children.map(props.children, function (child){
            return cloneElement(child,props)
           })}

        </div>
    )
}