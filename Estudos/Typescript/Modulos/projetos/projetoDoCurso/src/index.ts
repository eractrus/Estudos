
const num1 = document.querySelector('#num1') as HTMLInputElement
const num2 = document.querySelector('#num2') as HTMLInputElement
const btnSoma = document.querySelector('#btnSoma') as HTMLElement
const btnSub = document.querySelector('#btnSub') as HTMLElement
const display = document.querySelector('#display') as any

type operacao = "SOMAR" | "SUBTRAIR"

type valores = {
    tipo: operacao
    a: number
    b: number
    resultado: number
}

const executar = (valor: valores): number => {

    if (valor.tipo === 'SOMAR') {
        valor.resultado = valor.a + valor.b
        display.innerText = valor.resultado

    } else if (valor.tipo === 'SUBTRAIR') {
        valor.resultado = valor.a - valor.b
        display.innerText = valor.resultado
    }
    num1.value = ""
    num2.value = ""

    return valor.resultado
}

btnSoma.addEventListener('click', () => {
    executar({
        a: Number(num1.value),
        b: Number(num2.value),
        tipo: 'SOMAR',
        resultado: 0
    })
})

btnSub.addEventListener('click', () => {
    executar({
        a: Number(num1.value),
        b: Number(num2.value),
        tipo: "SUBTRAIR",
        resultado: 0
    })
})
