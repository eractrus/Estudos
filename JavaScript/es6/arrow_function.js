/*let quadrado = function(x = 0){
    return x * x
}*/

/* Arrow function
let quadrado = (x) =>{
    return x * x
}

console.log(` ${quadrado(5)}m²`)*/

let parOuImpar = (numero = 0) => {

    if(numero % 2 === 0){
        console.log (` O número ${numero} é par`)
    }else{
        console.log(`O número ${numero} é impar`)
    }

}

parOuImpar(13)