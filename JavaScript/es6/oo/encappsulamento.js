class TV{

    constructor(){
        this._relacaCanais = Array(2, 4, 5, 7, 10)
        this._canalAtivo = 
        this._volume = 5
    }

    get canalAtivo(){// o get é utilizado para recuperar o valor de uma variável privada
        return this._canalAtivo
    }

    set canalAtivo(canal){// o set é utilizado caso queira alterar o valor de uma variável privada

        let x = this._relacaCanais.indexOf(canal)

        if(x === -1){
            console.log(`O canal ${canal} não existe`)
        }else{
            console.log(`O canal está na posição ${this._relacaCanais.indexOf(canal)}`)
            this._canalAtivo = canal
            console.log(canal + ' Canal Alterado')
        }
    }
}

let tv = new TV()

tv.canalAtivo = 0


// metodos getters e setters

