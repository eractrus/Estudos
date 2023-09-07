
module.exports = (app) => {//exportando função

    //rota /notícias
    app.get('/noticia/', (req, res) => {

        const connection = app.config.DB_connection()//Atribuindo a conexão o banco de dados a variável connection
        const noticiaModel = app.App.Models.noticiasModel

        noticiaModel.getNoticia(connection, (erro, result) => {//SQL + função de retorno
            res.render('noticias/noticia', { noticia: result })//Onde irá renderizar + variável do resultado
        });
    })

};