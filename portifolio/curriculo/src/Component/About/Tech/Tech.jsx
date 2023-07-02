import React from "react";
import './Tech.css'

import ListTech from "../../../DB/ListTech";

export default () => {

    const List = ListTech.map((item) => {

        return (
            <li title={item.name}>
                <i class={item.icon}></i>
                <a target="_blank" href={item.href}>{item.name}</a>
            </li>
        )
    })

    return (
        <section className="containerTech">
            <ul>
                {List}
            </ul>
        </section>
    )
}