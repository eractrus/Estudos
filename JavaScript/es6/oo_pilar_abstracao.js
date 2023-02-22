
// Praticando OO - abstração

class ContaBancaria{//OBJETO

    //agencia
    //numeroConta
    //saldo
    //limite

    constructor(){ // declaração das características ou ATRIBUTOS
        this.agencia = 1075
        this.numeroConta = 1020304050
        this.saldo = 50
        this.limite = 450
    }

    // ações ou MÉTODOS - depositar, sacar, consultarSaldo

    depositar(valorDeposito){
        this.saldo += valorDeposito
    }

    sacar(valorSaque){
        this.saldo -= valorSaque
    }

    consultarSaldo(){
        return this.saldo + this.limite
    }
}

// passagem de identidade
let x = new ContaBancaria()
let y = new ContaBancaria()

// executando as funções

console.log(x.consultarSaldo() + 'R$ saldo em conta x')
console.log(y.consultarSaldo() + 'R$ saldo em conta y')

x.sacar(50)
console.log(x.consultarSaldo() + 'R$ Saque efetuado na conta X')
x.sacar(50)
console.log(x.consultarSaldo() + 'R$ Saque efetuado na conta X')









