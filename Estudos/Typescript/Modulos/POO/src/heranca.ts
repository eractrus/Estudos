// Diferença entre protected e private é que o private só pode ser acessado dentro da classe onde foi criado, ja o protected pode ser utilizado em classe extends "FIlhas"

class Usuario {
    nome: string
    senha: string
    cargo: string

    constructor(nome: string, senha: string, cargo: string) {
        this.nome = nome
        this.senha = senha
        this.cargo = cargo
    }

    login(nome: string, senha: string): string {
        if (this.nome == nome && this.senha == senha) {
            return `Acesso Liberado para o usuário ${nome}`
        } else {
            return 'Alguma informação está errado, tente novamente'
        }
    }

    protected setCargo(cargo: string) {
        this.cargo = cargo
        console.log('Parabéns, desejamos a você uma boa sorte nessas sua nova jornada')
    }

    trocaDeFuncao(cargo: string) {
        this.setCargo(cargo)
    }

    getTarefas() {
        console.log('Lista de tarefas ')
    }
}

class Admin extends Usuario {
    admin: boolean;

    constructor(nome: string, senha: string, cargo: string, admin = true) {
        super(nome, senha, cargo)
        this.admin = admin
    }
}

const user01 = new Usuario('Andressa alves', 'dessinha01', 'Aux. Produção')
const admin01 = new Admin('Eractrus de Judá', '12345678', 'Gerente de desenvolvimento')

//console.log(user01.login('Andressa alves','dessinha01'))
//console.log(admin01.login('Eractrus de Judá','12345678'))

console.log(user01)

user01.trocaDeFuncao('Assistente de controle de qualidade')

console.log(user01)
