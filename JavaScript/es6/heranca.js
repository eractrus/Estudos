
class Animal{// objeto superior / Pai
    constructor(){
        this.cor = ''
        this.tamanho = null
        this.peso = ''
    }

    dormir(){
        console.log('Dormir')
    }
}


class Cachorro extends Animal {// objeto
    constructor(){
        super()
        this.orelhas = 'Grandes e caídas'
    }

    correr(){
        console.log('Correr')
    }

    dormir(){
        console.log('Dormir')
    }
    rosnar(){
        console.log('Rosnar')
    }
}


    class Passaro extends Animal {//objeto
        constructor(){
            super()
            this.bico = 'Curto'
        }

        voar(){
            console.log('Voar')
        }

        dormir(){
            console.log('Dormir')
        }
    }

    class Papagaio extends Passaro{
        constructor(){
            super()
            this.falar = 'Sim'
        }

        falar(){
            console.log('Falar')
        }
    }

    let cachorro = new Cachorro()
    let passaro = new Passaro()
    let papagaio = new Papagaio()

 
    
   console.log(cachorro)
   console.log(passaro)
   console.log(papagaio)

   papagaio.voar()