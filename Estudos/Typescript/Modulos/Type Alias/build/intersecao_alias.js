"use strict";
// Interseção de tipos com Alias type
const cadastroProduto = {
    id: '120',
    nome: 'Fita adere',
    descricao: 'Fita Duplaface'
};
const cadastroValores = {
    id: cadastroProduto.id,
    nome: cadastroProduto.nome,
    descricao: cadastroProduto.descricao,
    preco: 599.99,
    validade: '2 anos'
};
console.log(cadastroValores);
