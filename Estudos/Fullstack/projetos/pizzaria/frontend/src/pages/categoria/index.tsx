import { useState, FormEvent } from 'react'
import { canSSRAuth } from '@/utils/canSSRAuth'
import { api } from '@/services/apiClient'

import Head from "next/head"
import styles from './styles.module.scss'
import { toast } from 'react-toastify'

import { Header } from "@/components/Header"

export default function Categoria() {

    const [name, setName] = useState('')

    async function handleCategoria(event: FormEvent) {
        event.preventDefault()

        if (!name) {
            toast.error('O nome da categoria é obrigatório')
            return
        }

        try {
            const response = await api.post('/category', {
                name
            })

            toast.success('Nova categoria registrada')

        } catch (error) {
            toast.error('Algo deu errado')
        }

        setName('')
    }

    return (
        <>
            <Head>
                <title>Pizzaria - Cadastrar categoria</title>
            </Head>
            <section>
                <Header />

                <main className={styles.container}>
                    <h1>Nova categoria</h1>

                    <form onSubmit={handleCategoria} className={styles.form}>

                        <input
                            className={styles.input}
                            type="text"
                            placeholder="Insira o nome da nava categoria"
                            value={name}
                            onChange={(e) => setName(e.target.value)} />

                        <button className={styles.buttonAdd} type='submit'>Cadastrar</button>

                    </form>

                </main>
            </section>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {
    return {
        props: {}
    }
})