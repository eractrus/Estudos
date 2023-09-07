module.exports = () => {

    this.getNoticias = (connection, callback) => {
        connection.query('select * from noticias ', callback);
    }

    this.getNoticia = (connection, callback) => {
        connection.query(`select * from noticias where id_noticias = 7`, callback)
    }

    //ADM conteúdos
    this.addNoticia = (data, connection, callback) => {
        connection.query('INSERT INTO noticias set ?', data, callback)
    }

    return this;
};