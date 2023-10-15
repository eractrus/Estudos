export class AuthTokenErro extends Error {
    constructor() {
        super('Erro ao tentar logar')
    }
}