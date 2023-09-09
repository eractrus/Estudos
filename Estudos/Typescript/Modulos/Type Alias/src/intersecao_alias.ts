// Interseção de tipos com Alias type

type produto = {
    id: string,
    nome: string,
    descricao?: string,
}

const cadastroProduto: produto = {
    id: '120',
    nome: 'Fita adere',
    descricao: 'Fita Duplaface'
}

type valoresProduto = {
    preco: number,
    validade: string
}

const cadastroValores: produto & valoresProduto = {
    id:cadastroProduto.id ,
    nome: cadastroProduto.nome,
    descricao: cadastroProduto.descricao,
    preco:599.99,
    validade: '2 anos'
}

console.log(cadastroValores)
