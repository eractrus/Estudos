/* class Produto{
    constructor(descricao, preco){
        this.descricao = descricao
        this.preco = preco
    }

    verDescricao(){
        console.log(`${this.descricao} por apenas ${this.preco}`)
    }
}

let produto = new Produto('Notebook', 'R$ 1599,99')

produto.verDescricao()




// forma Literal //

let produtoLiteral = {
    descricao: 'Televisão',
    preco:'R$ 1899,00',
    verDescricao: function(){
        console.log(`${this.descricao} por apenas ${this.preco}`)
    }
}

produtoLiteral.verDescricao()  */


///////  melhorando a escrita ///////////////

let nome = 'Eractrus'
let idade = '26'
let sexo =  'Masculino'
let profissao = 'Desenvolvedor web'


let objeto = {
    nome: nome,
    idade: idade,
    sexo: sexo,
    profissao: profissao,

    exibirResumo: function ExibirResumo(){
        console.log(`Olá menu nome é ${this.nome}, tenho ${this.idade} de idade e sou ${this.profissao}`)
    }
}
console.log(objeto)
objeto.exibirResumo()

/// melhorias mais recentes /////

let objeto2 = {

    // quando o nome da váriável for o mesmo passado no parâmentro, nós podemos omitir a váriável deixando o código mais limpo. Faça uma comparação em o OBJEO e OBJETO2
    nome,
    idade,
    sexo,
    profissao,

    exibirResumo(){// podemos remover a os ":" e remover a palvra function, isso deixa o código mais limpo
        console.log(`Olá menu nome é ${this.nome}, tenho ${this.idade} de idade e sou ${this.profissao}`)
    }
}

console.log(objeto2)
