import React from "react";
import TextAbout from "./TextAbout/TextAbout";
import Tech from "./Tech/Tech";
import TileH1 from "../Small/TitleH1/TileH1";

export default () => {
    return (
        <section className="containerAbout">
            <TileH1 title='Sobre Mim'/>
            <TextAbout />
            
            <TileH1 title='Conhecimentos'/>
            <Tech />
        </section>
    )
}