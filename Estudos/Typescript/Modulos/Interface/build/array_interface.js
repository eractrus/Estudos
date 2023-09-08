"use strict";
// interfaces com array
const frontend = {
    tecnologias: [
        { titulo: 'html', nivel: 'basico', temas: ['Estrutura HTMl', 'Tags', 'Projetos'] },
        { titulo: 'css', nivel: 'basico', temas: ['Seletores', 'documento externo', 'Projetos'] },
        { titulo: 'JavaScript', nivel: 'basico', temas: ['Variáveis', 'Lógica de programação', 'Funções'] }
    ]
};
function search(valor) {
    const resultado = frontend.tecnologias.filter(dados => dados.titulo == valor);
    resultado.forEach(item => {
        console.log(`Tecnologia: ${item.titulo}`);
        console.log(`Nível: ${item.nivel}`);
        console.log(`Temas: ${item.temas}`);
    });
}
search('JavaScript');
