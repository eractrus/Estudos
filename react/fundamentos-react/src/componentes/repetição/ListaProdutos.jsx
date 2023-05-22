import React from "react"

import Produtos from '../../data/produtos'


export default props => {

    const ListaProdutos = Produtos.map((produtos, i) => {
        
        return (

            <tr className={i % 2 === 0 ? 'par' : ''} key={produtos.id}>
                <td>{produtos.id}</td>
                <td>{produtos.nome}</td>
                <td>R$ {produtos.preco}</td>
            </tr>

        )
    })

    return (
        <div className="container0">
            <table className="tabela">

                <thead>
                    <tr>
                        <th>Código</th>
                        <th>Nome</th>
                        <th>Preço</th>
                    </tr>
                </thead>

                <tbody>
                    {ListaProdutos}
                </tbody>

            </table>
        </div>
    )
}