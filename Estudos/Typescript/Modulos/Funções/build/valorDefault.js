"use strict";
// tipagem em valores default
const cadastro = (email, senha, nome = 'Lead', idade) => {
    let dados = {
        nome: nome,
        email: email,
        senha: senha,
        idade: idade
    };
    console.log(dados);
};
cadastro('eractrus@gmail.com', '0123456', 'Eractrus Oliveira');
cadastro('email@test.com', '033221');
