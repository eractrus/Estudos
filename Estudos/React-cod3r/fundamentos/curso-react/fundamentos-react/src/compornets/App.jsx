import React from "react";
import Title from "./basic/ComParametros"
import Primeiro from './basic/Primeiro'
import Aleatorio from "./basic/aleatório/Aleatorio";
import Family from "./basic/aleatório/family";
import Member from "./basic/member";
import ListStudent from "./basic/repetição/ListaAlunos"
import ListProduct from "../compornets/basic/repetição/exercicio/repeticao";
import ParOuImpar from "./condicional/ParOuImpar";
import ListProducto from "./condicional/listProducto";
import Pai from "./comunicação/Direta/Pai";
import PaiInd from "./comunicação/Indireta/Pai";
import Input from "./Formulário/input";
import Display from "./contador/display";

import Card from './card/card'


export default () => {
    return (
        <div className="containerApp">

            <Title title="Fundamentos Ract" />

            <div className="containerCard">

                <Card titleCard='#10 - Componente controlado' color={'blueviolet'} >
                    <Display></Display>
                </Card>

                <Card titleCard='#10 - Componente controlado' >
                    <Input></Input>
                </Card>

                <Card titleCard='#09 - Comunicação indireta' >
                    <PaiInd></PaiInd>
                </Card>

                <Card titleCard='#08 - Comunicação direta' >
                    <Pai name='Eractrus de judá' age={26} status={false} />
                    <Pai name='Ben-hur de judá' age={29} status={true} />
                    <Pai name='Andressa Alves' age={28} status={true} />
                </Card>

                <Card titleCard='#07 - Render condicional' >
                    <ParOuImpar valor={23}></ParOuImpar>
                    <ListProducto></ListProducto>
                </Card>

                <Card color={'blueviolet'} titleCard="#07 - Desafio repetição">
                    <ListProduct></ListProduct>
                </Card>

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