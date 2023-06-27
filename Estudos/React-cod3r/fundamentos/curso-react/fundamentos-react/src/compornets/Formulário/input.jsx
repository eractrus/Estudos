import React, {useState} from "react";

export default () =>{

    const [valor, setValor] = useState('Entrada')

    const mostrarValor = (e) =>{
        setValor(e.target.value)
    }

    const style = {
        display: 'flex',
        flexDirection: 'column',
        fontSize:'16px',        
    }
    
    return (
        <div style={style}>
            <h1>{valor}</h1>
            <input type="text" value={valor} onChange={mostrarValor} />
            <input type="text" value={valor} readOnly />
            <input type="text" value={undefined}  />


        </div>
    )
}