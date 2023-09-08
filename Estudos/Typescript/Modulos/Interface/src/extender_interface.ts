//Interface extendida

interface pagamento {
    readonly id: string
    tipos: string[]
    descricao: string
}

const usuario: pagamento = {
    id: '1',
    tipos: ['Débido', 'crédito'],
    descricao: 'Formas de pagamentos via cartão'
}

// inclução do ted como pagamento

interface pagamentoDigital extends pagamento {
    pagamentoInicial: pagamento;
    tipoDigital: string[];
}

const pgDigital: pagamentoDigital = {
    id: '2',
    tipos: ['Débido', 'crédito'],
    tipoDigital: ['TED', 'PIX'],
    descricao: 'Formas de pagamentos via transferência',
    pagamentoInicial: usuario
}
console.log(usuario)
console.log(pgDigital)
