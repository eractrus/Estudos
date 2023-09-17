import { Link } from "react-router-dom"

import './Erro.css'
export default function paginaErro() {
    return (
        <div className="containerNotFound">
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <Link to={'/'}>Ver Todos os Filmes</Link>
        </div>

    )
}