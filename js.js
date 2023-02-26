

let Produto = Array()

Produto[0] = 'camisa'
Produto[1] = 'tenis'
Produto[2] = 'calca'



function FiltrarProdutos(valor){
    return console.log(Produto[valor])
}

document.getElementById(FiltrarProdutos(1)).style.background = "red"
