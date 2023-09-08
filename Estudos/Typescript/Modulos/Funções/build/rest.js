"use strict";
//tipagem sem saber a quantidade de parâmentros
const carrinho = (...carrinho) => {
    let qtdItem = carrinho.length;
    console.log(carrinho);
    return qtdItem;
};
console.log('Qauntidade de itens ' + carrinho('camisa', 'livro', 'Barra de chocolate'));
