//Herança

let Animal = { atri1:'a'}
let Vertebrado = {__proto__: Animal, atri2:'b'}
let Ave = {__proto__: Vertebrado, atri3: 'c'}

// proto faz com que consigamos ter acesso a valores superiores


console.log(ave.atri2)