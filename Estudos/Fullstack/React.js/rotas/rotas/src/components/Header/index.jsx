
import { Link } from 'react-router-dom'
import './header.css'

export default function Header() {
    return (
        <header>
            <h1>LogoMarca</h1>
            <nav>
                <Link to={'/'}>Home</Link>
                <Link to={'/sobre'}>Sobre</Link>
                <Link to={'/contato'}>Contato</Link>
            </nav>
        </header>
    )
}