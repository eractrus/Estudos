import React, { useEffect, useRef, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseRef = (props) => {

    const [valor1, setValor1] = useState("")
    const [valor2, setValor2] = useState("")

    const count = useRef(0)

    useEffect(function () {
        count.current += 1
    }, [valor1])



    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />

            <SectionTitle title='#01 - Iniciando com UseRef' />

            <div className="center">
                <input type="text" value={valor1} onChange={(e) => setValor1(e.target.value)} className="input" />
                <span className='text'>Valor: [<span className='red'>{count.current}</span>]</span>
            </div>

            <SectionTitle title='#02 - Exercício com UseRef' />

            <div className="center">
                <input type="text" value={valor2} onChange={(e) => setValor2(e.target.value)} className="input" />
            </div>

        </div>
    )
}

export default UseRef
