import React, { useState } from "react";
import IndiretaFilho from "./IndiretaFilho";

export default props => {

    const [nome, altnome] = useState('')
    const [idade, altidade] = useState()
    const [nerd, altnerd] = useState()

    function dadosFilho(nome, idade, nerd) {
        altnome(nome)
        altidade(idade)
        altnerd(nerd)
    }

    return (
        <div>
            <p>{nome} {idade} {nerd ? 'Verdadeiro' : 'Falso'}</p>
            <IndiretaFilho clicar={dadosFilho}></IndiretaFilho>
        </div>
    )
}