const mysql = require('mysql');//Incluindo o mysql

const connectMysql = () => {//Função de Wrap

    return mysql.createConnection(//função nativa de criação de conexão com o banco de dados
        {//dados de conexão
            host: 'localhost',
            user: 'root',
            password: 'Desenvolvedor22.',
            database: 'portal_noticias'
        });
}

module.exports = () => { return connectMysql } //exportando função de conexão com o banco de dados