

let _login = 'eractrus'
let _senha = '26521258'
let alerta = 'Tente novamente'
let teste = 0

function validarLogin() {
    let login = document.querySelector('#login').value
    let senha = document.querySelector('#senha').value

    if (login == _login && senha == _senha) {

        alert('Seja Bem-vindo')
        window.location.href = 'index.html'
        teste = 1

    } else {
        document.querySelector('.alerta').innerHTML = alerta
    }

    document.querySelector('#login').value = ""
    document.querySelector('#senha').value = ""

}


switch (teste) {
    case 0:
        function aut(){
            window.location.href = 'login.html'
        }
        break;

        case 1:
            function aut(){
                window.location.href = 'index.html'
            }
            break;

    default:
        break;
}

