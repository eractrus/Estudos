"use strict";
const num1 = document.querySelector('#num1');
const num2 = document.querySelector('#num2');
const btnSoma = document.querySelector('#btnSoma');
const btnSub = document.querySelector('#btnSub');
const display = document.querySelector('#display');
const executar = (valor) => {
    if (valor.tipo === 'SOMAR') {
        valor.resultado = valor.a + valor.b;
        display.innerText = valor.resultado;
    }
    else if (valor.tipo === 'SUBTRAIR') {
        valor.resultado = valor.a - valor.b;
        display.innerText = valor.resultado;
    }
    num1.value = "";
    num2.value = "";
    return valor.resultado;
};
btnSoma.addEventListener('click', () => {
    executar({
        a: Number(num1.value),
        b: Number(num2.value),
        tipo: 'SOMAR',
        resultado: 0
    });
});
btnSub.addEventListener('click', () => {
    executar({
        a: Number(num1.value),
        b: Number(num2.value),
        tipo: "SUBTRAIR",
        resultado: 0
    });
});
