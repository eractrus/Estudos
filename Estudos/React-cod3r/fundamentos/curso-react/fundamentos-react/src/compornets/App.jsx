import React from "react";
import Title from "./basic/ComParametros"
import Primeiro from './basic/Primeiro'
import Aleatorio from "./basic/aleatório/Aleatorio";
import Family from "./basic/aleatório/family";
import Member from "./basic/member";
import ListStudent from "./basic/repetição/ListaAlunos"

import Card from './card/card'

export default () => {
    return (
        <div className="containerApp">

            <Title title="Fundamentos Ract" />

            <div className="containerCard">

                <Card titleCard="#06 - Repetição">
                    <ListStudent></ListStudent>
                </Card>

                <Card titleCard='#05 - Componente filho 02'>

                    <Family lastName="Oliveira">
                        <Member name="Ana" />
                    </Family>

                    {/*
                    <Member name="Gustavo" />
                    <Member name="Thiago" />
                    */}

                </Card>

                <Card titleCard="#04 - Componente com filho" >
                    <Family lastName="Oliveira" />
                </Card>

                <Card titleCard="#03 - Card" />

                <Card titleCard="#02 - Desafio Aleatório" color={'blueviolet'}>
                    <Aleatorio value={1000} />
                </Card>

                <Card titleCard="#01 - Primeiro componente" >
                    <Primeiro />
                </Card>
            </div>


        </div>
    )
}