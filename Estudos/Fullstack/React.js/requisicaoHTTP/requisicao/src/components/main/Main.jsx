import React, { useEffect, useState } from 'react';
import { Card } from '../card/Card';
import './Main.css'




export function Main() {

    const [dados, setDados] = useState([])

    useEffect(() => {
        function buscaDadosApi() {
            const url = 'https://sujeitoprogramador.com/rn-api/?api=posts'

            fetch(url)
                .then(resultado => resultado.json())
                .then(dados => setDados(dados))
        }

        buscaDadosApi()
    }, [])

    const exibirCard = dados.map(item => {
      return  <Card
            titulo={item.titulo}
            capa={item.capa}
            subtitulo={item.subtitulo}
            categoria={item.categoria}
        />
    })

    return (
        <main>

            {exibirCard}

        </main>
    )
}

