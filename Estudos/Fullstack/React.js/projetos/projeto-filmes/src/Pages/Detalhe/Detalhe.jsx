import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

import api from '../../Services/Api';

import './Detalhe.css'

function PaginaDetalhe() {

    const { id } = useParams()
    const [filme, setFilme] = useState({})
    const [carregando, setCarregando] = useState(true)
    const Navigate = useNavigate()


    useEffect(() => {

        async function infoFilme() {

            await api.get(`/movie/${id}`, {
                params: {
                    api_key: '6b3b4b1d4b829cab41837e4d95e0a6c2',
                    language: 'pt-BR',
                }
            })
                .then(res => {
                    setFilme(res.data)
                    setCarregando(false)
                })
                .catch(() => {
                    console.log('Não encontrado')
                    Navigate('/', { replace: true })
                    return;
                })
        }

        infoFilme()

        return () => {
            console.log('Componente foi desmontado')
        }
    }, [id, Navigate]);

    function salvarFilme() {
        const minhalista = localStorage.getItem("@flix")

        let filmeSalvos = JSON.parse(minhalista) || [];

        const verificarFilme = filmeSalvos.some((busca) => busca.id === filme.id)

        if (verificarFilme) {
            toast.warning('Ese filme ja está na sua lista ')
            return;
        }

        filmeSalvos.push(filme)
        localStorage.setItem('@flix', JSON.stringify(filmeSalvos))
        toast.success('Filme cadastrado com sucesso !')
    }

    if (carregando) {
        return (
            <div className='containerTransicao'>
                <h2>Carregando informações do filme ...</h2>
            </div>
        )
    }


    return (
        <div className="containerPaginaDetalhe">
            <section className='containerImage'>
                <img src={`https://image.tmdb.org/t/p/original/${filme.backdrop_path}`} alt={`Imagem do Filme ${filme.title}`} />
            </section>

            <article className='containerInfo'>
                <section className='subContainer'>
                    <h1>{filme.title}</h1>
                    <p>{filme.overview}</p>
                </section>

                <section className='subContainer2'>
                    <div>
                        <h2>Nota:</h2>
                        <span>{filme.vote_average} / 10</span>
                    </div>

                    <div>
                        <h2>Ano:</h2>
                        <span>{filme.release_date}</span>
                    </div>
                </section>

                <nav>
                    <a target="blank" rel='external' href={`https://www.youtube.com/results?search_query=${filme.title} Trailer `} >Trailer</a>

                    <button onClick={salvarFilme}>Salvar</button>
                </nav>
            </article>


        </div>
    );
}

export default PaginaDetalhe;