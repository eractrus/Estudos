
module.exports = (app) => {//exportando função

    //rota /notícias
    app.get('/noticias', (req, res) => {

        const connection = app.config.DB_connection()//DataBases
        const noticiasModel = app.App.Models.noticiasModel// Model

        noticiasModel.getNoticias(connection, (erro, result) => {//Function controller
            res.render('noticias/noticias', { noticias: result })
        })
    
    });
};