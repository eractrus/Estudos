let entrada = document.querySelector('#entrada')
let qrcode = document.querySelector('#code')

function gerarCodigo() {

    if (entrada.value) {
        qrcode.src = `https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=${entrada.value} `
    } else{
        alert('Digite algo')
    }

}