import { useState, useEffect } from "react";

import api from "../../Services/Api";
import Card from "../../Components/Card/Card";

import './Home.css'

function PaginaHome() {
    
    const [filmes, setFilmes] = useState([]); // Inicialize com null ou um valor apropriado
    const [carregando, setCarregando] = useState(true)

    useEffect(() => {
        async function getFilmes() {

            const resultado = await api.get('movie/now_playing', {
                params: {
                    api_key: "6b3b4b1d4b829cab41837e4d95e0a6c2",
                    language: "pt-BR",
                    page: 1,
                }
            })

            setFilmes(resultado.data.results)
            console.log(resultado.data.results)
            setCarregando(false)
        }

        getFilmes()
    }, []);

    const Cards = filmes.map(filme => {
        return (
            <Card key={filme.id} image={`https://image.tmdb.org/t/p/original/${filme.poster_path}`} title={filme.title} description={filme.overview} id={filme.id} />
        )
    })

    if (carregando) {
        return (
            <div className="containerTransicao">
                <h2>Carregando Filmes ...</h2>
            </div>
        )
    }

    return (
        <div className="App">
            <section className="containerCard">
                {Cards}
            </section>
        </div>
    );
}

export default PaginaHome;
