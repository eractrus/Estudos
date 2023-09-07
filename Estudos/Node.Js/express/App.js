const app = require('./config/server')// importando o módulo do servidor
const msg = require('./msg_server')// importando mensagem do servidor

app.listen(3000, () => console.log(msg('Server ON')))// Onde o servidor vai rodar + mensagem
