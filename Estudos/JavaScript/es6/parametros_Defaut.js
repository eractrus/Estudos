
// Nos permite atribuir valores diretamente nas variáveis das functions
// esse recurso possibilita termos valores caso não seja passado quando a função for chamada

function contarUmaHistoria(personagem = 'Fubá', atividade = 'correr', nome_dono = 'João'){
    console.log(`Era uma vez um cachorro chamado ${personagem}, ele adorava ${atividade}, Seu dono era o ${nome_dono} e eles viveram felizes para sempre !`)
}

contarUmaHistoria(undefined, 'brincar', 'Pedro')