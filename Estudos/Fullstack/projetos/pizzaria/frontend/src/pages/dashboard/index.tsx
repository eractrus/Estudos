import { canSSRAuth } from '@/utils/canSSRAuth'
import Head from 'next/head'
import { Header } from '@/components/Header'

export default function Dashboard() {
    return (
        <>
            <Head>
                <title>Pizzaria- Painel</title>
            </Head>

            <div>
                <Header></Header>
                <h1>Dashbord</h1>
            </div>
        </>

    )
}

export const getServerSideProps = canSSRAuth(async () => {
    return {
        props: {}
    }
})