import { Link } from 'react-router-dom'

import './Header.css'

export default function Header() {
    return (
        <header>
            <h1>
                <Link to={'/'}>LogoFlix</Link>
            </h1>

            <nav>
                <Link to={'/meusFavoritos'}>Meus filmes</Link>
            </nav>
        </header>
    )
}