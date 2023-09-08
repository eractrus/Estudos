"use strict";
// Interface
/*const pedido: sacola = {//criação
    titulo: 'Camisa',
    descricao: '100% Algodão',
    preco: 200,
}*/
var list = [];
function novoPedido({ titulo, descricao, preco }) {
    list.push({
        titulo: titulo,
        descricao: descricao,
        preco: preco
    });
    list.forEach(item => {
        console.log(`Titulo: ${item.titulo}`);
        console.log(`Descricao: ${item.descricao}`);
        console.log(`Preco: ${item.preco}`);
        console.log(`------------------`);
    });
}
function getInfoSacola() {
    const resumo = list.length > 1 ? `${list.length} produtos adicionado a sacola` : `${list.length} produto adicionado a sacola`;
    console.log(resumo);
}
novoPedido({ titulo: 'Camisa Flamengo', descricao: 'Oficial 2023', preco: 300 });
novoPedido({ titulo: 'Camisa Vasco', descricao: 'Oficial 1996', preco: 50 });
novoPedido({ titulo: 'Camisa Fluminense', descricao: 'Oficial 2000', preco: 150 });
getInfoSacola();
