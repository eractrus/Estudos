import { useState, useContext, FormEvent } from 'react'
import { AuthContext } from '@/contexts/AuthContext'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import { toast } from 'react-toastify'

import styles from '@/styles/Home.module.scss'
import Logo from '../../../public/logo.svg'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'

import { canSSRGuest } from '@/utils/canSSRGuest'

export default function Home() {
    const { SignUp } = useContext(AuthContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false)

    async function handleSignUp(event: FormEvent) {
        event.preventDefault()

        if (name === "" || email === "" || password === "") {
            toast.error('Todos os campos são obrigatórios')
            return
        }

        setLoading(true)
        await SignUp({ name, email, password })
        setLoading(false)

    }

    return (
        <>
            <Head>
                <title>Pizzaria - Cadastrar</title>
            </Head>

            <section className={styles.containerCenter}>
                <Image src={Logo} alt='Logo Pizzaria' />

                <section className={styles.login}>

                    <h1 className={styles.text}>Criar conta</h1>

                    <form onSubmit={handleSignUp}>

                        <Input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder='Name' />
                        <Input value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='E-mail' />
                        <Input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />

                        <Button
                            type='submit'
                            loading={loading}>
                            Criar conta
                        </Button>
                    </form>

                    <Link className={styles.text} href={'/'} >Entrar</Link>

                </section>
            </section>
        </>
    )
}

export const getServerSideProps = canSSRGuest(async (ctx) => {
    return {
        props: {}
    }
})
