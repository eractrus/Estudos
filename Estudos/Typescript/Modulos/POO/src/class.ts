// Typescript com POO - Class
type status = 'ABERTO' | 'FECHADO'

class Loja {
    nome: string;
    categoria: string;

    constructor(nome: string, categoria: string) {
        this.nome = nome,
            this.categoria = categoria
    }

    iniciarServico(status: status): status {
        const result = status === 'ABERTO' ? 'ABERTO' : "FECHADO"

        return result
    }

    pedidos(status: status, cliente: string, ...pedidos: string[]) {

        const result = food.iniciarServico(status)

        if (status == 'ABERTO') {

            console.log(result)

            pedidos.forEach(pedido => {
                console.log(`${cliente} : ${pedido}`)
            }
            )
        } else {
            console.log('Loja não está aceitando pedidos no momento')
        }
    }
}


const food = new Loja('Burguer', 'Lanchonete')
const pizza = new Loja('pizzaRio', 'Pizzaria')
/*const statusLoja = food.iniciarServico('ABERTO')
food.pedidos(statusLoja, 'Eractrus', 'Suco de Laranja 500ml', 'Açaí 750ml')*/

const statusLoja = pizza.iniciarServico('ABERTO')

pizza.pedidos(statusLoja, 'Maria inês', 'Suco de Manga', 'Pizza promoção do dia', '+ adc bordar cheddar', 'refrigerante 2L')





