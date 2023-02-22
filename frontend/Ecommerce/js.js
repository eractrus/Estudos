// menu

function focar(nome, cor){
    document.getElementById(nome).style.color = cor
    document.getElementById(nome).style.borderBottom = '3px solid'

}

function desfocar(nome, cor){
    document.getElementById(nome).style.color = cor
    document.getElementById(nome).style.borderBottom = '3px solid transparent'

}

// modal do carrinho

function mostrarCarrinho(){
    document.getElementById('carrinho-modal').style.display = 'block'
}

function esconderCarrinho(){
    document.getElementById('carrinho-modal').style.display = 'none'
}

