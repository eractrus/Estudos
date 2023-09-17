import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'

import './Favoritos.css'

export default function PaginaFavoritos() {
    const [listaFilmes, setListaFilmes] = useState([])

    useEffect(() => {
        const itens = localStorage.getItem('@flix')
        setListaFilmes(JSON.parse(itens) || [])

    }, [])

    function removerItem(id) {
        let novaLista = listaFilmes.filter((item) => {
            return (item.id !== id)
        })
        setListaFilmes(novaLista)
        localStorage.setItem('@flix', JSON.stringify(novaLista))
        toast.success('Filme removido da lista')
    }

    const resultado = listaFilmes.map(item => {
        return <li key={item.id} ><span>{item.title}</span>
            <div>
                <Link to={`/detalhe/${item.id}`}>Ver detalhes</Link>
                <button onClick={() => removerItem(item.id)}>Remover</button>
            </div>
        </li>
    })

    return (

        <ul>
            <h1>Minha Lista</h1>
            {listaFilmes.length === 0 && <span> Você não possui nenhum filme salvo ): </span>}

            <hr />
            {resultado}
        </ul>
    )
}