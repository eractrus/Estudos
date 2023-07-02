import React from "react";
import {useParams} from 'react-router-dom'

export default () => {

    const {id} = useParams()

    return (
        <div>
            <h1>Painel</h1>
            <h2>Seja bem-vindo {id} !</h2>
        </div>
    )
}