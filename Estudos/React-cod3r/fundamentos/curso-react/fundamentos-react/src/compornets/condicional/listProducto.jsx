import React from "react";
import ListProduct from "../../data/listProduct";
import If from "./if";
import "./condicional.css"

export default () => {

    const List = ListProduct.map((price) => {
        return (
            <If preco={price.price}>
                <tr>
                    <td>{price.idProducto}</td>
                    <td>{price.name}</td>
                    <td>R$ {price.price.toFixed(2).replace('.', ',')} </td>
                </tr>
            </If>
        )
    })

    return (
        <div className="tableCondicional">
            <table border={1}>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>nome</th>
                        <th>preço</th>
                    </tr>
                </thead>

                <tbody>
                    {List}
                </tbody>
            </table>

        </div>
    )

}

