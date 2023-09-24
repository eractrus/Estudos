var valor = 15;

fetch(`https://economia.awesomeapi.com.br/json/usd-brl`)
.then(ret => ret.json())
.then(data => {
    console.log('1 - ' + data[0].code)
    console.log(`1 em ${data[0].codein} - ${data[0].bid}`)
    var total  = valor * parseFloat(data[0].bid);
    console.log(`Total: R$ ${total.toFixed(2)}`);
})
.catch(error => console.error('Erro ao obter dados da API', error));
