// COnexão com o banco de dados

type dados = {
    user: string
    passdword: string
}

const autenteicacao: dados = {
    user: 'eractrus',
    passdword: '22552200'
}

export const dataBase = (user: string, passdword: string): string => {

    if (user == autenteicacao.user && passdword == autenteicacao.passdword) {
        return 'Servidor ativo !'
    }else{
        return 'Erro: tente novamente'
    }

}

