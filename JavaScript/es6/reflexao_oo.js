// sistema para marcenaria

// objetos - cadeira e sofá



// objeto cadeira

class Cadeira{
    // passagem de atributos
    constructor(qtde_pernas, giratoria, cor){
        this.qtde_pernas = qtde_pernas
        this.giratoria = giratoria
        this.cor = cor
    }

    // métodos da cadeira
    girarCadeira(){
        if(this.girarCadeira === true){
            console.log('A cadeira gira')
        }else{
            console.log('A cadeira não gira')
        }
    }
}

        let cadeiras = Array()

        cadeiras.push(new Cadeira( 1, false, 'azul'))
        cadeiras.push(new Cadeira( 4, true, 'preta'))

    console.log(cadeiras)

