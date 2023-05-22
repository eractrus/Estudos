

// função de calcular
const visor = document.querySelector('#visor')

function calcular(tipo, valor) {
    if (tipo === 'acao') {

        if (valor === 'c') {
            visor.value = ''
        }

        if (valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            visor.value += valor
        }

        if (valor === '=') {
            const resultado = visor.value
            visor.value = eval(resultado)
        }



    } else if (tipo === 'valor') {
        visor.value += valor
    }
}