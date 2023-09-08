// interfaces com array

interface modulosDados {
    titulo: string
    nivel: string
    temas: string[]
}

interface cursos {
    tecnologias: modulosDados[]
}

const frontend: cursos = {
    tecnologias: [
        { titulo: 'html', nivel: 'basico', temas: ['Estrutura HTMl', 'Tags', 'Projetos'] },
        { titulo: 'css', nivel: 'basico', temas: ['Seletores', 'documento externo', 'Projetos'] },
        { titulo: 'JavaScript', nivel: 'basico', temas: ['Variáveis', 'Lógica de programação', 'Funções'] }
    ]
}

function search(valor: string): void {
    const resultado = frontend.tecnologias.filter(dados => dados.titulo == valor)

    resultado.forEach(item => {
        console.log(`Tecnologia: ${item.titulo}`)
        console.log(`Nível: ${item.nivel}`)
        console.log(`Temas: ${item.temas}`)

    })

}

search('JavaScript')