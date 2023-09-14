"use strict";
class ContaBank {
    constructor(nome, cpf, dataNasc) {
        this.dataCliente = []; // Contas de cliente
        this.nome = nome;
        this.cpf = cpf;
        this.dataNasc = dataNasc;
        this.dep = 0;
        this.saq = 0;
        this.saldo = 0;
        this.dataCliente = []; // Contas de cliente
    }
    depositar(valor) {
        this.dep += valor; //Adiciona o valor recebido na variável
        this.saldo += valor; // Atualize o saldo ao depositar
        return 'Depósito realizado com sucesso!'; //retorna uma mensagem
    }
    sacar(valor) {
        if (valor <= this.saldo) { //se o valor recebido for menor que o saldo da conta
            this.saq += valor; //adiciona o valor de saque na variável
            this.saldo -= valor; // Atualize o saldo ao sacar
            return 'Saque realizado com sucesso!'; //retorna uma mensagem
        }
        else { //caso contrário
            return 'Saldo insuficiente para saque.'; //retorna mensagem de erro
        }
    }
    saldoDaConta() {
        return 'R$ ' + this.saldo + ' Saldo atual'; // retorna uma mensagem com o valor atualizado da conta
    }
    criarConta(nome, cpf, dataNasc) {
        const cliente = new ContaBank(nome, cpf, dataNasc); //cliente recebe uma nova conta 
        this.dataCliente.push(cliente); //inclui a conta nova no array 'database'
        return 'Conta criada com sucesso!'; // Retorna uma mensagem de sucesso
    }
}
const Unidade01 = new ContaBank('Gerente', '00000000000', '00/00/0000'); // Crie uma instância da classe ex: criação de uma agência
console.log(Unidade01.criarConta('Eractrus de judá', '00011144477', '11/08/1996')); //Criação de uma conta dentro da agência
console.log(Unidade01.dataCliente[0]);
