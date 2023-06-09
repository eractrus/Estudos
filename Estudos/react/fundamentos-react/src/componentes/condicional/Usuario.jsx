import React from "react";
import If from './if'

export default props => {

    const usuario = props.usuario || {}
    const nota = props.nota || {}

    return (
        <div>

            <If test={usuario && usuario.nome !== ""}>
                Seja bem vindo <strong>{usuario.nome}</strong> !
            </If>

        </div>
    )
}