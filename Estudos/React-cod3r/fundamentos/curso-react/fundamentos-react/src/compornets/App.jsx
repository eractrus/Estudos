import React from "react";
import Title from "./basic/ComParametros"
import Primeiro from './basic/Primeiro'
import Aleatorio from "./basic/aleatório/Aleatorio";

import Card from './card/card'

export default () => {
    return (
        <div className="containerApp">

            <Title title="Fundamentos Ract" />

            <div className="containerCard">
                <Card titleCard="Desafio Aleatório">
                    <Aleatorio value={1000} />
                </Card>

                <Card titleCard="Primeiro componente" >
                    <Primeiro />
                </Card>
            </div>


        </div>
    )
}