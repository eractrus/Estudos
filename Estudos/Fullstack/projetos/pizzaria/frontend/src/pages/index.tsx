import { useState, useContext, FormEvent } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import styles from '@/styles/Home.module.scss'
import Logo from '../../public/logo.svg'
import { Input } from '@/components/ui/Input'
import { Button } from '@/components/ui/Button'
import { AuthContext } from '@/contexts/AuthContext'

import { toast } from 'react-toastify'

import { canSSRGuest } from '@/utils/canSSRGuest'
export default function Home() {

  //Hooks
  const { signIn } = useContext(AuthContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)

  async function handleForm(event: FormEvent) {
    event.preventDefault()

    if (email === "" || password === "") {
      toast.warning('Credenciais incorretas')
      return
    }

    setLoading(true)
    await signIn({ email, password })
    setLoading(false)
  }

  return (
    <>
      <Head>
        <title>Pizzaria - Login</title>
      </Head>

      <section className={styles.containerCenter}>
        <Image src={Logo} alt='Logo Pizzaria' />

        <section className={styles.login}>

          <form onSubmit={handleForm}>

            <Input value={email} onChange={(e) => setEmail(e.target.value)} type='text' placeholder='E-mail' />
            <Input value={password} onChange={(e) => setPassword(e.target.value)} type='password' placeholder='Password' />

            <Button
              type='submit'
              loading={loading}>
              Acessar
            </Button>

          </form>

          <Link className={styles.text} href={'/cadastro'} >Registrar-se</Link>

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