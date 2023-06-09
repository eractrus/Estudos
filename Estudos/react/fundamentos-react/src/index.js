// importação de bibliotecas
import ReactDOM from 'react-dom'
import React from 'react' // para utlizar a linguagem JSX sempre teremos que importar o React

//importando o css
import './index.css' // importação relativa

import Primeiro from './componentes/básicos/primeiro' // importando função de um outro documento com importação relativa e atribuição de variável


// importando componente ComParametro.jsx
import ComParametro from './componentes/básicos/ComParametro'

// importando componente Fragmento.jsx
import Fragmentos from './componentes/básicos/Fragmentos'

// importando componente Aleatório.jsx
import Aleatorio from './componentes/básicos/Aleatorio'

//importando componente Card.jsx
import Card from './componentes/Layout/Card'

// importando componente familia.jsx
import Familia from "./componentes/básicos/familia"

// importanto componente membro.jsx
import Membro from "./componentes/básicos/membro"

// importando ListaAlunos.jsx
import ListaAluno from './componentes/repetição/ListaAlunos'

// importando ListaProdutos.jsx
import ListaProdutos from './componentes/repetição/ListaProdutos'

//estilo
import './estilos/produtos.css'

// importando componente ParOuImpar
import ParOuImpar from './componentes/condicional/ParouImpar'

// IMPORTANDO COMPONENTE CONDICIONAL
import UsuarioInfo from './componentes/condicional/Usuario'

// Importando componente Direto filho
import DiretaPai from './componentes/comunicacao/DiretaPai'

import IndiretaPai from './componentes/comunicacao/IndiretaPai'

ReactDOM.render(
    <div id="app">

        <h1 className='tituloInicial'>Fundamentos do React </h1>

        <div className='container'>

            <Card titulo="Aula10 - Comunicação Indireta">
                <IndiretaPai />
            </Card>

            <Card titulo="Aula9 - Comunicação Direta">
                <DiretaPai />
            </Card>

            <Card titulo="Aula8 - Renderização condicional">

                <ParOuImpar numero={23} />
                <UsuarioInfo usuario={{ nome: 'Matheus da Silva' }} />

            </Card>

            <Card titulo="Aula7 - Exercício de repetição" cor="#8a2be2">

                <ListaProdutos />

            </Card>

            <Card titulo="Aula6 - repetição">

                <ListaAluno />

            </Card>

            <Card titulo="Aula5 - Componentes filho">

                <Familia lastName="de Judá">{/* elemento pai */}

                    <Membro name="Eractrus" />{/* elemento filho */}

                    <Membro name="Maria" />

                    <Membro name="Ben-hur" />


                </Familia>

            </Card>

            <Card titulo="Aula4 - Exercício de numero Aleatório" cor="#8a2be2">
                <Aleatorio ValorMaximo={5000} ValorMinimo={100} />
            </Card>

            <Card titulo="Aula3 - Fragmento">
                <Fragmentos />
            </Card>

            <Card titulo="Aula2 - Componentes com paramentros">
                <ComParametro Saudacao="Olá, seja bem - vindo !" nome="Eractrus de Judá" funcao="Desenvolvedor web" />
            </Card>

            <Card titulo="Aula1 - primeiro componente">
                <Primeiro></Primeiro>
            </Card>
        </div>


    </div>,
    document.querySelector('#root')
)