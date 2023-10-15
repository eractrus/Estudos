import Head from 'next/head';
import { canSSRAuth } from '@/utils/canSSRAuth'
import { FiUpload } from 'react-icons/fi'
import { useState, ChangeEvent, FormEvent } from 'react';
import { setupApiClient } from '@/services/api'
import { toast } from 'react-toastify'
import styles from './styles.module.scss'

import { Header } from "@/components/Header";

type ItemProps = {
    id: string;
    name: string;
}

interface CategoryProps {
    categoryList: ItemProps[]
}

export default function Produto({ categoryList }: CategoryProps) {

    const [avatarUrl, setAvatarUrl] = useState('')
    const [imageAvatar, setImageAvatar] = useState(null)
    const [categories, setCategories] = useState(categoryList || [])
    const [categorySelected, setCategorySelected] = useState(0)
    const [name, setName] = useState('')
    const [price, setPrice] = useState('')
    const [description, setDescription] = useState('')


    function handleFIle(e: ChangeEvent<HTMLInputElement>) {

        if (!e.target.files) {
            return
        }

        const image = e.target.files[0]

        if (!image) {
            return
        }

        if (image.type === 'image/jpeg' || image.type === 'image/png' || image.type === 'image/jpg') {

            setImageAvatar(image)
            setAvatarUrl(URL.createObjectURL(image))
        }
    }

    function handleCategory(e) {
        setCategorySelected(e.target.value)
    }

    async function handleNewProducto(e: FormEvent) {

        e.preventDefault()

        try {

            const data = new FormData()

            if (name === "" || description === "" || price === "" || imageAvatar === null) {
                toast.error('Todos os dados são obrigatórios')
                return
            }

            data.append('name', name)
            data.append('price', price)
            data.append('description', description)
            data.append('category_id', categories[categorySelected].id)
            data.append('file', imageAvatar)

            const api = setupApiClient()
            await api.post('/product', data)

            toast.success('Produto cadastrado com sucesso ')

        } catch (error) {
            toast.error('Algo deu errado')
        }

        setName('')
        setDescription('')
        setPrice('')
        setImageAvatar(null)
    }

    return (
        <>
            <Head>
                <title>Pizzaria - Cadastrar produto</title>
            </Head>

            <section>
                <Header />

                <main className={styles.container}>
                    <h1>Cadastrar novo produto</h1>

                    <form onSubmit={handleNewProducto} className={styles.form}>

                        <label className={styles.labelAvatar}>
                            <span>
                                <FiUpload size={30} color='#fff' />
                            </span>

                            <input type="file" accept='image/png, image/jpeg, image/jpg' onChange={handleFIle} />

                            {imageAvatar && (
                                <img
                                    className={styles.preview}
                                    src={avatarUrl}
                                    alt="Foto do produto"
                                />
                            )}
                        </label>

                        <select value={categorySelected} onChange={handleCategory}>
                            {categories.map((item, index) => {
                                return (
                                    <option key={item.id} value={index}>
                                        {item.name}
                                    </option>
                                )
                            })}
                        </select>

                        <input
                            className={styles.input}
                            type='text'
                            placeholder='Nome do produto'
                            value={name}
                            onChange={(e) => setName(e.target.value)} />

                        <input
                            className={styles.input}
                            type='text'
                            placeholder='Preço do produto'
                            value={price}
                            onChange={(e) => setPrice(e.target.value)} />

                        <textarea
                            className={styles.input}
                            placeholder='Descrição do produto'
                            value={description}
                            onChange={(e) => setDescription(e.target.value)} />

                        <button className={styles.buttonAdd} type='submit'>Cadastrar produto</button>

                    </form>
                </main>
            </section>
        </>
    )
}

export const getServerSideProps = canSSRAuth(async (ctx) => {

    const apiClient = setupApiClient(ctx)
    const response = await apiClient.get('/category')

    return {
        props: {
            categoryList: response.data
        }
    }
})