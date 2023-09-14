"use strict";
// COnexão com o banco de dados
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataBase = void 0;
const autenteicacao = {
    user: 'eractrus',
    passdword: '22552200'
};
const dataBase = (user, passdword) => {
    if (user == autenteicacao.user && passdword == autenteicacao.passdword) {
        return 'Servidor ativo !';
    }
    else {
        return 'Erro: tente novamente';
    }
};
exports.dataBase = dataBase;
