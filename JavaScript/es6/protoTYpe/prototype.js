
let a1 = {
    cor: ' branco',
    modelo: 'AS215F',
    levantarVoo: () => {
        console.log('Levantar Voo')
    }
}

// Por função 

let Aviao2 = function(){
    this.cor = 'branco',
    this.modelo = 'ASv727',
    this.levantarVoo =() => {
        console.log('Levantar Voo')
    }
}

let a2 = new Aviao2()

// Class

class AviaoC{
    constructor(){
        this.cor = "Vermelho"
        this.modelo = "Gol787"
    }

    levantarVoo(){
        console.log('Levantar Voo')
    }
}

let a3 = new AviaoC()

console.log(a1)
console.log(a2)
console.log(a3)