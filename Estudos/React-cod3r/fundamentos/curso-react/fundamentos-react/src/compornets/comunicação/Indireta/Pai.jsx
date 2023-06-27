import React, {useState} from "react";
import Filho from "./Filho";

export default () => {

    const [name, setName] = useState('Nome')
    const [age, setAge] = useState('Idade')
    const [status, setStatus] = useState('Status')

    const infoFilho = (name, age, status = 'Reprovado') => {
        setName(name)
        setAge(age)
        setStatus(status ? "Aprovado" : "Reprovado")

    }

    return (
        <div>
            <div>
                <span>{name} /</span> <span>{age} / </span><span>{status}</span>
            </div>
            <h4>Clique para ver o resultado</h4>
            <Filho function={infoFilho}></Filho>
        </div>
    )
}