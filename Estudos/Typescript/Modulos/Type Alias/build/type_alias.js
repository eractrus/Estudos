"use strict";
//Type Alias
function acessar(id, nome) {
    console.log(`Conta: ${id} - Acesso Leberado, Bem-vindo ${nome} `);
}
console.log('Qual a forma de pagamento ?');
const pagar = (tipo) => console.log(`Pagamento via ${tipo}`);
pagar('PIX');
