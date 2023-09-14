class ContaBank {// Criação do modelo
    //tipagem dos dados
    nome: string;
    cpf: string;
    dataNasc?: string;
    dep: number;
    saq: number;
    saldo: number;
    dataCliente: ContaBank[] = [];// Contas de cliente


    constructor(nome: string, cpf: string, dataNasc?: string) {//Declaração das variáveis internas do objeto
        this.nome = nome;
        this.cpf = cpf;
        this.dataNasc = dataNasc;
        this.dep = 0;
        this.saq = 0;
        this.saldo = 0;
        this.dataCliente = [];// Contas de cliente

    }

    depositar(valor: number): string {//Função de depósito
        this.dep += valor;//Adiciona o valor recebido na variável
        this.saldo += valor; // Atualize o saldo ao depositar
        return 'Depósito realizado com sucesso!';//retorna uma mensagem
    }

    sacar(valor: number): string {//Função de saque
        if (valor <= this.saldo) {//se o valor recebido for menor que o saldo da conta
            this.saq += valor; //adiciona o valor de saque na variável
            this.saldo -= valor; // Atualize o saldo ao sacar
            return 'Saque realizado com sucesso!';//retorna uma mensagem
        } else {//caso contrário
            return 'Saldo insuficiente para saque.';//retorna mensagem de erro
        }
    }

    saldoDaConta(): string {//função de exibição de saldo atualizado da conta
        return 'R$ ' + this.saldo + ' Saldo atual';// retorna uma mensagem com o valor atualizado da conta
    }

    criarConta(nome: string, cpf: string, dataNasc: string): string {//função de criação de uma conta nova
        const cliente = new ContaBank(nome, cpf, dataNasc);//cliente recebe uma nova conta 
        this.dataCliente.push(cliente);//inclui a conta nova no array 'database'
        return 'Conta criada com sucesso!';// Retorna uma mensagem de sucesso
    }
}


const Unidade01 = new ContaBank('Gerente', '00000000000', '00/00/0000'); // Crie uma instância da classe ex: criação de uma agência

 console.log(Unidade01.criarConta('Eractrus de judá', '00011144477','11/08/1996'))//Criação de uma conta dentro da agência

console.log(Unidade01.dataCliente[0])

