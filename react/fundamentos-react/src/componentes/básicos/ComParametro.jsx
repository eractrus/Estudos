// importação do React
import React from "react"

export default function ComParametro(props) {
    const idade = props.nome == 'Eractrus de Judá' ? '26 anos' : ' 30 anos '
    return (
        <div id="app">
            <br></br>

            <h1>
                {props.saudacao}
            </h1>

            <p>
                Meu nome é {props.nome} e sou {props.funcao} e possuo {idade}
            </p>
        </div>
    )
}