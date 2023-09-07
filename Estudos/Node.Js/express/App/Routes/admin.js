
module.exports = (app) => {

    app.get('/admin_form', (req, res) => res.render('admin/form_add_noticia'))

    app.post('/noticias/salvar', (req, res) => {
        const data = req.body//Recebe dados do body

        const connection = app.config.DB_connection()//DataBases
        const noticiasModel = app.App.Models.noticiasModel// Model

        noticiasModel.addNoticia(data, connection, (erro, result) => {//Function controller
            res.redirect('/noticias')
        })
    })

}
