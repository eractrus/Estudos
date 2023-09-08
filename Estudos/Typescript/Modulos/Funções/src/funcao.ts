//TIPAGEM EM FUNÇÃO
function login(nickName: string): boolean {
    const msg = 'Bem-vindo ' + nickName

    const ret = nickName === "" ? false : true

    return ret
}

const autenticacao = login("")
console.log(autenticacao)