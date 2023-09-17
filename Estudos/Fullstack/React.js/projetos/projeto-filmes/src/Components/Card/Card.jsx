import { Link } from 'react-router-dom'
import './Card.css'

export default function Card(props) {
    return (
        <div className="card">

            <img src={props.image} alt={`imagem do filme ${props.title}`} />

            <article className="containerInfo">
                <h2>{props.title} </h2>
            </article>

            <section className="containerBtnCard">
                <Link to={`/detalhe/${props.id}`}>Saber mais</Link>
            </section>
        </div>
    )
}