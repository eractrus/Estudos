//Type Alias

type dadosLogin = string | number | null

function acessar(id: dadosLogin, nome: dadosLogin): void {
    console.log(`Conta: ${id} - Acesso Leberado, Bem-vindo ${nome} `)
}

///////////////////////////////////////////////////////////////////////////////////
type formaPagamentos = 'Débito' | 'Crédito' | "TED" | 'PIX'

console.log('Qual a forma de pagamento ?')

const pagar = (tipo: formaPagamentos) => console.log(`Pagamento via ${tipo}`)

pagar('PIX') 
