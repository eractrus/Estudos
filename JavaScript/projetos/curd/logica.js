
// se você tenha apenas um submit - cancelando o envio do formulário
const form = document.querySelector('form')
const ul = document.querySelector('ul')


    form.onsubmit = function(event){
        event.preventDefault()

            const input = form.querySelector('input')
                const value = input.value

                        if(input.value == ""){
                            alert('Digite uma tarefa válida')
                        }else{
                            input.value = ""
                            ul.innerHTML += `<li class="lista ">${value} <button class="fechar delete">X</button></li>`
                        }
                 

        ul.onclick = function(event){
            if(event.target.classList.contains('delete')){
                if(confirm('Você realmente quer excluir este item ?')){
                    event.target.parentElement.remove()
                }
            }
        }

    }

