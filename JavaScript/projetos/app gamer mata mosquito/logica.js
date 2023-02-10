
//Declaração de variáveis
var altura = 0
var largura = 0
var vidas = 1
var tempo = 20
var criaMosquitoTempo = 1500


// passagem do nível por url
var nivel = window.location.search
nivel = nivel.replace('?' , '')

//lógica para nível de dificuldade
    if(nivel === 'facil'){
        criaMosquitoTempo = 1500
    }
        else if(nivel === 'intermediario'){
            criaMosquitoTempo = 1000
        }
            else if(nivel === 'profissional'){
                criaMosquitoTempo = 750
            }


// verificação de tamanho de tela
function ajustedetela(){
    altura = window.innerHeight
    largura = window.innerWidth

    console.log(altura, largura)
}

    ajustedetela()

// cronometro
var cronometro = setInterval(function(){

    tempo -= 1

        if(tempo < 0){
            window.location.href="vitoria.html"
        }else{
            document.getElementById('cronometro').innerHTML = tempo
        }
}, 1000)

//posição aleatória para os mosquitos
function posicaoRandomica(){

// remover mosquito caso exista 

    if(document.getElementById('mosquito')){
        document.getElementById('mosquito').remove()

    //contagem de vidas + redirecionamento para tela fim
        if(vidas > 3){
            window.location.href="fim_de_jogo.html"
        }else{
            document.getElementById('v' + vidas ).src="imagens/imagens/coracao_vazio.png"

            vidas++
        }
    }

    var positionx = Math.floor(Math.random() * largura) - 100
    var positiony = Math.floor(Math.random() * altura) - 100

    positionx = positionx < 0 ? 0 : positionx
    positiony = positiony < 0 ? 0 : positiony

    console.log(positionx, positiony)


    // introduzir o elemento html (mosquito)

    var mosquito = document.createElement('img')
    mosquito.src='imagens/imagens/mosca.png'
    mosquito.className = tamanhoAleatorio() + ' ' + ladoAleatorio()
    mosquito.style.left = positionx + 'px'
    mosquito.style.top = positiony + 'px'
    mosquito.style.position = 'absolute' 
    mosquito.id = 'mosquito'
    mosquito.onclick = function(){
        this.remove()
    }
    document.body.appendChild(mosquito)

    tamanhoAleatorio()// retorna o tamnho aleatório do mosquito

    ladoAleatorio()// retorna o lado do mosquito de forma aleatória
}


// tamanho aleatório do mosquito
function tamanhoAleatorio(){

    var classe = Math.floor(Math.random()*3)

        switch(classe){
            case 0:
                return 'mosquito1'

            case 1:
                return 'mosquito2'
                
            case 2:
                return 'mosquito3'   
                
        }
}


// posição do mosquito 
function ladoAleatorio(){

    var classe = Math.floor(Math.random()*2)

    switch(classe){
        case 0:
            return 'ladoA'

        case 1:
            return 'ladoB'
  
            
    }
}

