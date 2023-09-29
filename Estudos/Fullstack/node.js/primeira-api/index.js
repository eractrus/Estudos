//importação de bibliotecas
const express = require('express')

//criação de servidor
const server = express()
server.use(express.json())//Formato de dados que irá passar pelo exporess "JSON"

//Armazenamento
const cursos = ['Javascript', 'React.js', 'Typescript', 'Node.js']

//middlewares

//Função que trata a entrada de dados pelo Body da aplicação
function Check(req, res, next) {

    if (!req.body.nome) {//Se não existir o nome
        return res.status(400).send({ mensagem: 'Erro na entrada de dados, verifique e tente novamente' })//Retorna status 400 e mensagem
    }
    return next()//se existir, segue o fluxo da aplicação
}

//Função que trata a entrada de dados pelo Query url
function CheckQuery(req, res, next) {

    const queryData = req.query.nome // atribuindo o valor da query a variável "queryData"

    if (!queryData) {//se não existir dados
        return res.status(400).send({ mensagem: 'Erro na entrada de dados, verifique e tente novamente' })// Retorna o erro 400 e mensagem
    }
    return next()//Se existir segue o fluxo normalmente
}

//Rotas

server.get('/curso', (req, res) => { return res.json(cursos) }) // reotrna todos os cursos

//retorna um curso específico
server.get('/curso/:index', (req, res) => {
    const { index } = req.params
    return res.json(cursos[index])
})

//Adiciona um curso novo no armazenamento
server.post('/curso', CheckQuery, (req, res) => {
    const nome = req.query.nome
    cursos.unshift(nome)
    res.send({ mensagem: 'Curso cadastrado com sucesso !' })
})

//Altera o valor de um curso específico
server.put('/curso', Check, (req, res) => {
    const { nome, alt } = req.body
    const index = cursos.indexOf(nome)

    if (index === -1) {
        res.send({ mensagem: 'Erro ao localizar' })
        return
    }

    cursos[index] = alt
    res.send({ mensagem: 'Curso alterado com sucesso !' })
})

//Remove da lista um curso específico
server.delete('/curso', Check, (req, res) => {
    const { nome } = req.body//recebe dados "NOME" do body
    const index = cursos.indexOf(nome)// Pesquisa o curso mencionado dentro do armazenamento e retorna sua posição

    if (index === -1) {//Se não existir
        return res.status(404).send({ mensagem: 'Erro ao localizar o curso' })//Retorna uma mensagem de erro e status 400
    }
    // se existir
    cursos.splice(index, 1)//exclua o valor com base no "INDEX" encontrado
    return res.status(200).send({ mensagem: 'Curso deletado com sucesso !' })// Retorna o status 200 e uma mensagem
})

//Porta onde a aplicação irá rodar
server.listen(3000, console.log({ mensagem: 'Servidor ativo' }))



