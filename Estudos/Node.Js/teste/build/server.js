"use strict";
//importação das bibliotecas, framework, modulos e outros
const express = require('express');
const mysql = require('mysql');
//Conexão com o banco de dados
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Desenvolvedor22.',
    database: 'canvas'
});
//Criação de servidor
const server = express();
//Rotas
//Rota que lista todos os registros do banco de dados
server.get('/', (req, res) => {
    function listaRegistro() {
        connection.query(`select * from registro`, (erro, result) => {
            if (erro) {
                return "Algo de errado, verifique o servidor";
            }
            else {
                // console.log({ resultados: result })
                console.log({ resultados: result });
            }
        });
    }
    res.send(listaRegistro());
});
//Rota que lista apenas os registros de uma seção do banco de dados ***** passar a seção como parâmetro na url ******
server.get('/:secao', (req, res) => {
    const dadosParaFiltro = req.params.secao;
    const queryParaFiltrar = 'Select * from registro where secao = ?';
    function filtroSecao() {
        connection.query(queryParaFiltrar, dadosParaFiltro, (erro, result) => {
            if (erro) {
                console.error('Erro na consulta:', erro);
                res.send('Algo deu errado, verifique o servidor.');
            }
            else {
                console.log({ resultados: result });
                //res.status(200).json(result);
            }
        });
    }
    res.send(filtroSecao());
});
//Rota que inclui um registro no banco de dados com base nos parâmetros da URL
server.post('/:titulo/:descricao/:secao', (req, res) => {
    const titulo = req.params.titulo;
    const descricao = req.params.descricao;
    const secao = req.params.secao;
    const dadosParaInserir = {
        titulo: titulo,
        descricao: descricao,
        secao: secao
    };
    const queryParaInserir = 'INSERT INTO registro SET ?';
    function adicionarRegistro() {
        connection.query(queryParaInserir, dadosParaInserir, (erro, result) => {
            if (erro) {
                return "Algo de errado, verifique o servidor";
            }
            else {
                console.log({ resultados: result });
            }
        });
        return 'Registro realizado !';
    }
    res.send(adicionarRegistro());
});
// deletar dados
server.delete('/:id', (req, res) => {
    const idParaDeletar = req.params.id;
    const queryParaDeletar = 'DELETE FROM registro where id = ?';
    connection.query(queryParaDeletar, idParaDeletar, (erro, result) => {
        if (erro) {
            return "Algo de errado, verifique o servidor";
        }
        else {
            res.send('Registro deletado !');
        }
    });
});
server.listen(3000, () => console.log('Servidor ativo'));
