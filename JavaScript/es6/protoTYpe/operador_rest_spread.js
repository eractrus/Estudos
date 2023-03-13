// Spread = espalhar dados
//Rest = Juntar dados

// spread - espalhar //

/*let artigo = 'Como utilizar o operador rest/spread'

console.log(artigo)

console.log(...artigo) // espalhado
console.log([...artigo])// dentro de array

// array

let listaCurso1 =['informática e manutenção','programação, frontend e backend']
let listaCurso2 =['Android e IOS','React e Angular']
let listaCursoCompleto =['web designer', 'android', ...listaCurso1, ...listaCurso2]// utilizando o operador spread


console.log(listaCursoCompleto)

// objetos

let pessoa = {
    nome: 'Eractrs',
    idade: 26
}

let PessoaCompleta ={
    endereco: 'Rua 5',
    numero: 505,...pessoa
}

console.log(PessoaCompleta)*/

// rest - funtando dados

function soma(...parametos){
    let resultado = 0

    console.log(parametos)
    parametos.forEach(v => resultado += v )

    return resultado
}

console.log(soma(3,5,8,7,5,2))





