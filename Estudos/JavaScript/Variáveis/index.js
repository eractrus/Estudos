/* Variáveis - var, let, const

var a = 10 
var b = 20

{
    var a = 30
    let b = 22 // A função let vem com conceito de escopo de bloco
    
    console.log(`Bloco ${a}`) // resultado = 30
    console.log(`Bloco ${b}`) // resultado = 22
}

console.log(a) // resultado = 30
console.log(b) // resultado = 22

// Repare na saída dos resultados, quando solicitamos o resultado através do console.log() a variável let só funciona dentro do bloco*/


// Constante - cont

// CONSTANTES NÃO PODEM SER REATRIBUIDAS NEM REDECLARADA E NÃO SOFRE ELEVAÇÃO

const  FIRST_NAME = 'jUDÁ'

console.log(FIRST_NAME)


/* 

VAR - ESCOPO GLOBAL, PODE SER REDECLARADA, PODE SER REATRIBUIDA, SOFRE ELEVAÇÃO HOISTING

LET E CONST - - ESCOPO GLOBAL, NÃO PODE SER REDECLARADA, NÃO PODE SER REATRIBUIDA, NÃO SOFRE ELEVAÇÃO HOISTING