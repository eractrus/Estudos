//Tipagem ENUM

enum Autenticacao {
    user = 0, admin = 1
}

let menuAdmin: string[]
menuAdmin = ['Home', 'Cadastrar Produto', 'Excluir produto']

let menuUser: string[]
menuUser = ['Home', 'Produtos']


console.log(Autenticacao.user === 0 ? menuUser : menuAdmin)