"use strict";
//Tipagem ENUM
var Autenticacao;
(function (Autenticacao) {
    Autenticacao[Autenticacao["user"] = 0] = "user";
    Autenticacao[Autenticacao["admin"] = 1] = "admin";
})(Autenticacao || (Autenticacao = {}));
let menuAdmin;
menuAdmin = ['Home', 'Cadastrar Produto', 'Excluir produto'];
let menuUser;
menuUser = ['Home', 'Produtos'];
console.log(Autenticacao.user === 0 ? menuUser : menuAdmin);
