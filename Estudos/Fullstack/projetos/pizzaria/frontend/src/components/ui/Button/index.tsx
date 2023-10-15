import { ButtonHTMLAttributes, ReactNode } from 'react'
import styles from './styles.module.scss'

import { FaSpinner } from 'react-icons/fa'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    loading: boolean,
    children: ReactNode
}

export function Button({ loading, children, ...rest }: ButtonProps) {
    return (
        <button
            className={styles.button} {...rest}
            disabled={loading}
        >
            {loading ? (<FaSpinner color="#fff" size={16} />) :
                (<a className={styles.textButton} >{children}</a>)}

        </button>
    )
}