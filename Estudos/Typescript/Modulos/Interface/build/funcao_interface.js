"use strict";
// interface com funções
/*
interface curso {
    nome: string
    descricao: string
    preco: number

    //Definir os parametros que a função irá receber e o tipo de retorno
    promocao: (preco: number, nome: string) => void
}

const anuncio: curso = {

    nome: 'Gestão de negócios',

    descricao: 'Esse curso é para quem deseja aprimorar seus conhecimentos em gestão de negócios',

    preco: 999,

    promocao: (preco, nome) => {
        console.log(`Valor promocional do curso ${nome} até hoje R$ ${preco}`)
    }
}

anuncio.promocao(599, anuncio.nome)*/
const calcularArea = (altura, largura) => {
    return altura * largura;
};
console.log(calcularArea(10, 20) + ' Área total');
