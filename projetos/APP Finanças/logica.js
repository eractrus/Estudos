// objeto despesa

class Despesa{// classe despesa 

    // recebe parametros da função cadastrarDespesa()
    constructor(ano, mes, dia, tipo, descricao,valor){
        this.ano = ano
        this.mes = mes
        this.dia = dia
        this.tipo = tipo
        this.descricao = descricao
        this.valor = valor
    }

    //validação de campos referente a entrada de dados do html
    validarDados(){
        for(let i in this){// percorre todos os elementos THIS e armazena na variável i
            if(this[i] == undefined || this[i] == "" || this[i] == null){ // se i for igual a undefiend, "" ou null
                return false// retorno falso
            }
        }
        return true// retorno verdadeiro caso o valo acima não seja encontrado
    }
}

    

class Bd{ // classe para inclusão de dados no banco de dados via locas storege

    constructor(){
        let id = localStorage.getItem('id') // atribui o valor de ID do banco de dados para variável ID

        if(id === null){// se o valor for igual a NULL
            localStorage.setItem('id', 0)// evia para o banco de dados a descrição 'id' e o valor 0
        }
    }

    getProximoId(){//função que faz contagem dos elementos Id no banco de dados
        let proximoId = localStorage.getItem('id') //recebe o valor de ID do banco de dados e guarda dentro da variável proxmoId
        return parseInt(proximoId) + 1 // retorna o valor da variável proximoId para que chamou somando +1 ** obs conversaão sendo feita de string para número inteiro
    }

    gravar(desp){//recebe parametro por meio da desp
        let id = this.getProximoId()// atribui a variável Id a função getProximoId
        localStorage.setItem( id, JSON.stringify(desp))// envia para o banco de dados como descrição o ID e via JSON os valores recebidos via parametros
        localStorage.setItem('id', id)
    }

    recuperarTodosRegistros(){

        let despesas = Array()

        let id = localStorage.getItem('id')// recupera o valor máaximo de id cadastrado no banco de dados

        // percorrer todos os id cadastrados e recupera todos os registros
        for(let i = 1; i<= id; i++){
            // puxa dados do bando de dados via JSON e converte para objeto
            let despesa = JSON.parse(localStorage.getItem(i))

            if(despesa === null){// elimina o erro caso tenha algum valor null no banco de dados
                continue
            }
            despesa.id = i
            despesas.push(despesa)// inclui objeto dentro de array desepesas
        }

        return despesas
    }

    pesquisar(despesa){

        let despesasFiltradas = Array()
        despesasFiltradas = this.recuperarTodosRegistros()


        //filtro ano
        if(despesa.ano !== ''){
            console.log('filtro ano')
            despesasFiltradas = despesasFiltradas.filter(d => d.ano == despesa.ano)
        }

        //filtro mês
        if(despesa.mes !== ''){
            console.log('filtro mes')
            despesasFiltradas = despesasFiltradas.filter(d => d.mes == despesa.mes)
        }

         //filtro dia
         if(despesa.dia !== ''){
            console.log('filtro dia')
            despesasFiltradas = despesasFiltradas.filter(d => d.dia == despesa.dia)
        }

         //filtro tipo
         if(despesa.tipo !== ''){
            console.log('filtro tipo')
            despesasFiltradas = despesasFiltradas.filter(d => d.tipo == despesa.tipo)
        }

         //filtro descricao
         if(despesa.descricao !== ''){
            console.log('filtro descrição')
            despesasFiltradas = despesasFiltradas.filter(d => d.descricao == despesa.descricao)
        }

         //filtro valor
         if(despesa.valor !== ''){
            console.log('filtro valor')
            despesasFiltradas = despesasFiltradas.filter(d => d.valor == despesa.valor)
        }

        return despesasFiltradas
    }

    remover(id){
        localStorage.removeItem(id)
    }

  
}

let bd = new Bd()// criação de um novo objeto chamado bg

// capturando dados dos inputs
function cadastrarDespesa(){

    //recebendo valores do html via ID
    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value
    let dia = document.getElementById('dia').value
    let tipo = document.getElementById('tipo').value
    let descricao = document.getElementById('descricao').value
    let valor = document.getElementById('valor').value

    let despesa = new Despesa(ano, mes, dia, tipo, descricao,valor)// envia os dados recebidos via html para a class Despesa

    if(despesa.validarDados()){
        bd.gravar(despesa)// chamada da função gravar da class Bg
        $('#mensagemDeCadastro').modal('show')  // exibe modal de sucesso
        
        // limpa campos após o envio dos dados para o banco de dados
        let ano = document.getElementById('ano').value = ""
        let mes = document.getElementById('mes').value = ""
        let dia = document.getElementById('dia').value = ""
        let tipo = document.getElementById('tipo').value = ""
        let descricao = document.getElementById('descricao').value = ""
        let valor = document.getElementById('valor').value  = ""

        //estilização do modal em caso de sucesso
        document.getElementById('tituloDoModal').innerHTML = 'Dados Válidos'
        document.getElementById('container-titulo-name').className = 'modal-header text-success'

        document.getElementById('mensagemDoModal').innerHTML = 'Dados cadastrados com sucesso'

        document.getElementById('btn-modal').className ='btn btn-success'
        document.getElementById('btn-modal').innerHTML ='Continuar'

    }else{
        $('#mensagemDeCadastro').modal('show')// exibe modal de erro

        //estilização do modal em caso de falha
        document.getElementById('tituloDoModal').innerHTML = 'Dados Inválidos'
        document.getElementById('container-titulo-name').className = 'modal-header text-danger'

        document.getElementById('mensagemDoModal').innerHTML = 'Verifique os campos, todos precisam estar preenchidos.'

        document.getElementById('btn-modal').className ='btn btn-danger'
        document.getElementById('btn-modal').innerHTML ='Voltar'

    }
}

function carregaListaDespesas( despesas = Array(), filtro = false){

    if(despesas.length == 0 && filtro == false){
        despesas = bd.recuperarTodosRegistros()

    }

            let listaDespesas = document.getElementById('listaDespesas')
            listaDespesas.innerHTML = ''

                despesas.forEach(function(d){
        
                    linha = listaDespesas.insertRow()// criação de linha

                        //inserir colula
                        linha.insertCell(0).innerHTML =`${d.dia}/${d.mes}/${d.ano}`

                        switch(d.tipo){// aletera a tipo de númedo para sua respectiva descrição
                            case '1': d.tipo = 'Casa'
                                break

                            case '2': d.tipo = 'Educação'
                                break

                            case '3': d.tipo = 'Lazer'
                                break    

                            case '4': d.tipo = 'Alimentação'
                                break

                            case '5': d.tipo = ' Cartão de crédito'
                                break

                            case '6': d.tipo = 'Outros'
                                break
                        }

                            linha.insertCell(1).innerHTML = d.tipo
                                linha.insertCell(2).innerHTML = d.descricao
                                    linha.insertCell(3).innerHTML = `R$ ${d.valor}`

            // inserir botão de exclusão
                let btn = document.createElement('button')
                    linha.insertCell(4).append(btn)
                        btn.id = 'id_despesa' + d.id
                            btn.innerHTML = '<i class="fas fa-times"></i>'
                                btn.className = 'btn btn-danger'

                        btn.onclick = function(){
                            let id = this.id.replace('id_despesa' , '')    // manipulação de string                 

                            bd.remover(id)// chamada da fução remover e passagem de valor

                            window.location.reload()
                        }
                       

     })

}

function pesquisarDespesa(){
    //seleciona os elementos html
    let ano = document.getElementById('ano').value
    let mes = document.getElementById('mes').value
    let dia = document.getElementById('dia').value
    let tipo = document.getElementById('tipo').value
    let descricao = document.getElementById('descricao').value
    let valor = document.getElementById('valor').value

    let despesa = new Despesa(ano, mes, dia, tipo, descricao,valor)

    bd.pesquisar(despesa)// chama a função de pesquisar com o parametrô recebido 

    let despesas = bd.pesquisar(despesa)

   this.carregaListaDespesas(despesas, true)
}


