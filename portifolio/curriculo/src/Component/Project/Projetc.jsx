import React from "react";
import './Project.css'
import TileH1 from "../Small/TitleH1/TileH1";
import Project from '../../DB/ListProject'

export default () => {

    const infoCard = Project.map((item) => {
        return (
            <div className="card">
                <a target="_blank" href={item.url}>{item.name}</a>
            </div>
        )
    })

    return (
        <section className="containerProject">
            <TileH1 title='Meus projetos' />
            <div className="containerCard">
                {infoCard}

            </div>
        </section>
    )
}