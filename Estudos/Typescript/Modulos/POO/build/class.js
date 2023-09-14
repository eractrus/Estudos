"use strict";
class Loja {
    constructor(nome, categoria) {
        this.nome = nome,
            this.categoria = categoria;
    }
    iniciarServico(status) {
        const result = status === 'ABERTO' ? 'ABERTO' : "FECHADO";
        return result;
    }
    pedidos(status, cliente, ...pedidos) {
        const result = food.iniciarServico(status);
        if (status == 'ABERTO') {
            console.log(result);
            pedidos.forEach(pedido => {
                console.log(`${cliente} : ${pedido}`);
            });
        }
        else {
            console.log('Loja não está aceitando pedidos no momento');
        }
    }
}
const food = new Loja('Burguer', 'Lanchonete');
const pizza = new Loja('pizzaRio', 'Pizzaria');
/*const statusLoja = food.iniciarServico('ABERTO')
food.pedidos(statusLoja, 'Eractrus', 'Suco de Laranja 500ml', 'Açaí 750ml')*/
const statusLoja = pizza.iniciarServico('ABERTO');
pizza.pedidos(statusLoja, 'Maria inês', 'Suco de Manga', 'Pizza promoção do dia', '+ adc bordar cheddar', 'refrigerante 2L');
