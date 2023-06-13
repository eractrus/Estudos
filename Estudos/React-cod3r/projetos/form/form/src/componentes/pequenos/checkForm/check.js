import React from "react";
import '../checkForm/check.css'

export default function () {
    return (
        <div className="containerCheck">
            <div>
                <input type="checkbox" id="check" />
                <label for='check'>Manter-me conectado</label>
            </div>

            <a href='#' >Esqueci minha senha</a>

        </div>

    )
}