

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
let papagaio = new Papagaio('sim','preto','350','50','pequeno')
let papagaio2 = new Papagaio('Não','Branco','200','15','pequeno')


console.log(papagaio)
console.log(papagaio2)



 
