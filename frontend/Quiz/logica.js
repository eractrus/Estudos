function trocarQuestao(titulo , questao,btn, cor){
    document.getElementById('titulo').innerHTML = titulo
    document.getElementById('questao').innerHTML = questao

    
    document.getElementById(btn).style.background = cor
    document.getElementById(btn).style.color = '#fff'

}

function focoAlternativa(card,cor){
    document.getElementById(card).style.background = cor
}

function desfocarAlternativa(card,cor){
    document.getElementById(card).style.background = cor

}
