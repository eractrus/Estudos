// modelo - 

class FinApp {
    // Atribuições
    constructor() {
        this.receita = 0
        this.dispesa = 0
        this.saldo = 0
    }

    //Métodos
    cadastrarReceita(valorReceita) {
        this.receita += valorReceita
        let receita = app.receita
        document.querySelector('.valorReceita').innerHTML = 'R$ ' + receita.toFixed(2)
    }

    cadastrarDispesa(valorDispesa) {
        this.dispesa += valorDispesa
        let dispesa = app.dispesa
        document.querySelector('.valorDispesa').innerHTML = 'R$ ' + dispesa.toFixed(2)
    }

    mostrarSaldo() {
        this.saldo = this.receita - this.dispesa
        let diferenca = app.saldo
        document.querySelector('.valorDiferenca').innerHTML = 'R$ ' + diferenca.toFixed(2)

        if (this.saldo < 0) {
            document.querySelector('.mensagem').innerHTML = "Suas finanças precisam de atenção. Reveja seus gastos ! "
        } else {
            document.querySelector('.mensagem').innerHTML = " Matenha sua receita maior que suas dispesas."

        }

    }
}

//Criando objeto
let app = new FinApp()

const mensagemCuidado = 'Você precisa urgentemente rever seus gastos'

// Função para chamadas dos métodos do objeto
function cadastrar() {

    let tipo = document.querySelector('#tipo').value
    let valor = document.querySelector('#entrada').value
    document.querySelector('#entrada').value = ''

    if (tipo == 'receita') {
        app.cadastrarReceita(parseFloat(valor))

    } else if (tipo == 'dispesa') {
        app.cadastrarDispesa(parseFloat(valor))

    }

    app.mostrarSaldo()

}




