"use strict";
//Interface com valores opcional
const cliente1 = {
    nome: 'Eractrus',
    endereco: 'Rua de teste'
};
const cliente2 = {
    nome: 'Eractrus',
    endereco: 'Rua de teste',
    cpf: '33322211102'
};
function cadastroCliente(dados) {
    console.log(`Nome: ${dados.nome}`);
    console.log(`Endereço: ${dados.endereco}`);
    console.log(`CPF: ${dados.cpf == undefined ? 'Não informado' : dados.cpf}`);
}
cadastroCliente({ nome: 'Andressa Maria', endereco: 'Rua de teste 2', cpf: '12345632100' });
