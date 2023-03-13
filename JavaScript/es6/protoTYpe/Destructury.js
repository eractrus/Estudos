/*
//destructury em array

let frutas = [['uva', 'abacaxi','limão'], ['Maria', "José"]]

let[a,[,n2]] = frutas


//let [a, ,c] /* decalaração do desctructury  = frutas // pular um itemm

console.log(a,n2)


//destructury em onjeto

let Produto ={
    descricao: 'Notebbok',
    preco: 1999,
    detalhe:{
        fabricante: 'Dell',
        modelo: 'NBK1999br'
    }
}

//let {descricao, preco} = Produto
//let {descricao: d, preco: p} = Produto
let {detalhe: {fabricante, modelo = 'Não informado'}} = Produto
console.log(fabricante, modelo)*/

//destructury para funções



