// importação de bibliotecas
import ReactDOM from 'react-dom'
import React from 'react' // para utlizar a linguagem JSX sempre teremos que importar o React

//importando o css
import './index.css' // importação relativa

import Primeiro from './componentes/básicos/primeiro' // importando função de um outro documento com importação relativa e atribuição de variável

let saudacao = ' Estou estudando React !'

ReactDOM.render(
    <h1>
        <Primeiro></Primeiro>
        
        {saudacao}
    </h1>,
    document.querySelector('#root')
    )