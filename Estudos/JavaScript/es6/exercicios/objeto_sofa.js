// criando um objeto sofá

//objetos sofá
class Sofa{
    //criação dos atributis
    constructor(cor = 'preto', qtde_lugares = 2, reclinavel = false){
        this.cor = cor
        this.qtde_lugares = qtde_lugares
        this.reclinavel = reclinavel
    }

    // criação dos métodos
    reclinarSofa(){
       if(this.reclinavel === true){
            console.log('O sofá reclina')
       } else{
            console.log('O sofá reclina')
       }
    }
}

//let indicie = // passagem de valor para filtro no indicie na linha 30

let sofa =  Array()// lista de criação de itens

// criação de itens 
sofa.push(new Sofa())
sofa.push(new Sofa('1vermelho', 4, true))

console.log(sofa)