import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

const UseState = (props) => {

    const [count, setCount] = useState(0)
    const [name, setName] = useState('')

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />

            <SectionTitle title='#01 - Exercício contador' />

            <div className="center">
                <span className='text'>{count}</span>

                <div>
                    <button onClick={() => setCount(count -1)} className='btn'>-</button>
                    <button onClick={() => setCount(count +1)} className='btn'>+</button>

                </div>
            </div>

            <SectionTitle title='#02 - useState com input' />

            <input onChange={(e) => setName(e.target.value) } type="text" className="input" />
            <span className='text'>{name}</span>

        </div>
    )
}

export default UseState
