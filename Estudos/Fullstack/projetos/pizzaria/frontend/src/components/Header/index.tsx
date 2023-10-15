import { useContext } from 'react'
import styles from './styles.module.scss'
import Link from 'next/link'
import { FiLogOut } from 'react-icons/fi'
import { AuthContext } from '@/contexts/AuthContext'

export function Header() {

    const { SignOut } = useContext(AuthContext)

    return (
        <header className={styles.containerHeader}>
            <div className={styles.headerContent}>
                <Link href={'/'}>
                    <img src="/logo.svg" alt="Lodo Pizzaria" width={190} height={60} />
                </Link>

                <nav className={styles.menuNav}>
                    <Link href={'/'}>
                        Painel
                    </Link>

                    <Link href={'/categoria'}>
                        Categoria
                    </Link>

                    <Link href={'/produto'}>
                        Produto
                    </Link>

                    <button onClick={SignOut}>
                        <FiLogOut color="#fff" size={24} />
                    </button>
                </nav>
            </div>
        </header>
    )
}