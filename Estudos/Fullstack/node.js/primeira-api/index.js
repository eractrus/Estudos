const express = require('express')

const server = express()

//Rotas
server.get('/curso', (req, res) => {
    return res.json({curso: 'Acessou a rota'})
})
server.listen(3000, console.log('Servidor ativo'))

