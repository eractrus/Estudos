class Animal{
    constructor(sabeFalar, cor, tamanho, peso, bico){
        this.tamanho = tamanho
        this.cor = cor
        this.peso = peso
        this.bico = bico
        this.sabeFalar = sabeFalar
    }

    voar(){
        console.log('Animal que voa')
    }

    correr(){
        console.log('Animal que corre')
    }

    nadar(){
        console.log('Animal que nada')
    }
}

class Passaro extends Animal {
    constructor(sabeFalar, cor, tamanho, peso, bico){
        super(sabeFalar, cor, tamanho, peso, bico)
        this.bico = bico
    }
    
}

class Papagaio extends Animal {
    constructor(sabeFalar, cor, tamanho, peso, bico){
        super(  sabeFalar, cor, tamanho, peso, bico)
        this.sabeFalar = sabeFalar
    }

    falar(){
        console.log('Papagaio fala')
    }

}

class Avestruz extends Passaro{
    constructor(){
        super(  'Não', 'Preto', 1000, 200, 'grande')

    }

    enterrarCabeca(){
        console.log('Enterra a cabeça')
    }

    voar(){
        console.log('Animal não voa')
    }
}

let papagaio = new Papagaio('sim','preto','350','50','pequeno')
let avestruz = new Avestruz()

console.log(avestruz)
avestruz.enterrarCabeca()
avestruz.voar()

