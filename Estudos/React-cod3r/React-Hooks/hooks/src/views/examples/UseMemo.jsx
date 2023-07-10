import React, { useMemo, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'

function soma(a, b) {
    const futture = Date.now() + 1500
    while (Date.now() < futture) { }

    return a + b
}

const UseMemo = (props) => {
    const [n1, SetN1] = useState(0)
    const [n2, SetN2] = useState(0)
    const [n3, SetN3] = useState(0)

    const resultado = useMemo(() => soma(n1, n2), [n1, n2])

    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />

            <div className="center">
                <input type="number" className="input" value={n1}
                    onChange={e => SetN1(parseInt(e.target.value))} />

                <input type="number" className="input" value={n2}
                    onChange={e => SetN2(parseInt(e.target.value))} />

                <input type="number" className="input" value={n3}
                    onChange={e => SetN3(parseInt(e.target.value))} />

                <span className=' text'>{resultado}</span>
            </div>
        </div>
    )
}

export default UseMemo
