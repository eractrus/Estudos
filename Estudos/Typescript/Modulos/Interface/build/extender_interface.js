"use strict";
//Interface extendida
const usuario = {
    id: '1',
    tipos: ['Débido', 'crédito'],
    descricao: 'Formas de pagamentos via cartão'
};
const pgDigital = {
    id: '2',
    tipos: ['Débido', 'crédito'],
    tipoDigital: ['TED', 'PIX'],
    descricao: 'Formas de pagamentos via transferência',
    pagamentoInicial: usuario
};
console.log(usuario);
console.log(pgDigital);
