import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

const UseCallback = (props) => {

    const [number, setNumber] = useState(0)

    function add(value) {
        setNumber(number + value)
    }
    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />

            <div className="center">
                <span className="text">{number}</span>
                <div>
                    <button className="btn" onClick={() => add(2)}>+2</button>
                    <button className="btn" onClick={() => add(10)}>+10</button>
                    <button className="btn" onClick={() => add(50)}>+50</button>
                </div>
            </div>
        </div>
    )
}

export default UseCallback
