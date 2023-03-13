
    let BicicletaFactory = function(cor, marcha, aro, tipoPedal){
        return{
            cor,
            marcha,
            aro,
            tipoPedal,
            pedalar(){
                console.log('Método pedalar')
            }
        }
    }
    
        let bicicleta1 = BicicletaFactory('Preta',15,18, 'alumínio')
            bicicleta1.pedalar()
                console.log(bicicleta1)



