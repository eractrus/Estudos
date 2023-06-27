import React from "react";
import listProduct from "../../../../data/listProduct";
import "./repeticao.css"

export default () => {

    const list = listProduct.map((producto, i) => {
        return (
            <tr key={producto.id} className={i % 2 == 0 ? 'dark' : ""}>
                <td>{producto.idProducto}</td>
                <td>{producto.name}</td>
                <td>R$ {producto.price.toFixed(2).replace('.', ',')} </td>
            </tr>
        )
    })
    return (
        <div className="containerTable">
            <table border={1}>

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NOME</th>
                        <th>PREÇO</th>
                    </tr>
                </thead>

                <tbody>
                    {list}
                </tbody>
            </table>
        </div>
    )
}