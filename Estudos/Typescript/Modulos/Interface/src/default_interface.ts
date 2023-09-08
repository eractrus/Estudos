//Interface com valores opcional

interface cadastroCliente {
    nome: string;
    cpf?: string;
    endereco: string;
}

const cliente1: cadastroCliente = {
    nome: 'Eractrus',
    endereco: 'Rua de teste'
}

const cliente2: cadastroCliente = {
    nome: 'Eractrus',
    endereco: 'Rua de teste',
    cpf: '33322211102'
}

function cadastroCliente(dados: cadastroCliente) {
    console.log(`Nome: ${dados.nome}`)
    console.log(`Endereço: ${dados.endereco}`)
    console.log(`CPF: ${dados.cpf == undefined ? 'Não informado' : dados.cpf}`)
}

cadastroCliente({ nome: 'Andressa Maria', endereco: 'Rua de teste 2', cpf: '12345632100' })

