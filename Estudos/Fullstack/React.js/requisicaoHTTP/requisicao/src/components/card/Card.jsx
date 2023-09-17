import './Card.css'
export function Card(props) {
    return (
        <div className="card">

            <img src={props.capa} alt={props.titulo} />
            
            <section className='containerTexto'>
                <h2>{props.titulo}</h2>
                <h3>{props.subcategoria}</h3>
                <h3>{props.categoria}</h3>
                <button>Saiba mais</button>
            </section>

        </div>
    )
}
