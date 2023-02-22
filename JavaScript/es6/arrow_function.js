/*let quadrado = function(x = 0){
    return x * x
}*/




/* Arrow function
let quadrado = (x) =>{
    return x * x
}

console.log(` ${quadrado(5)}m²`)*/

let parOuImpar = (numero) => {

    if(numero % 2 === 0){
        console.log('O numero é par')
    }else{
        console.log('O numero é impar')
    }

}

parOuImpar(4)