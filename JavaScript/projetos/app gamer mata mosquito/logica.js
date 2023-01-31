
// verificação de tamanho de tela

    var altura = 0
    var largura = 0

    function ajustedetela(){
        altura = window.innerHeight
        largura = window.innerWidth

        console.log('Altura = ' + altura, 'Largura = ' + largura )
    }

    ajustedetela()

// fim da verificação do tamanho da tela

//posição aleatória para os mosquitos

    var positionx = Math.floor(Math.random() * altura)
    var positiony = Math.floor(Math.random() * largura)

    console.log(positionx, positiony)

//fim do calculo de posição aleatória

// introduzir o elemento html (mosquito)


