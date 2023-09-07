const express = require('express')//criando servidor com express
const consign = require('consign')// Criando consign
const bodyParser = require('body-parser')//Criando body-Parser
const app = express()// Atribuindo o exprpess a variável app

//Alterando onde o servidor buscará os arquivos EJS para renderizar na tela
app.set('view engine', 'ejs')
app.set('views', './App/views')

//Crinando uma instância do body-Parser
app.use(bodyParser.urlencoded({ extended: true }))

// Automatizando a criação das roras e autoReload
consign()
    .include('./App/Routes')
    .then('config/DB_connection.js')
    .then('./App/Models')
    .into(app)//Indicando onde o consign irá buscar as rotas 

module.exports = app// exportando o servidor