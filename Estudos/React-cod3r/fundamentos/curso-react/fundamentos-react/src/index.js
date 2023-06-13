import React from "react"
import ReactDOM from "react-dom"
// css
import './style.css'

// import component
import Primeiro from './compornets/basic/Primeiro'

const root = document.querySelector('#root')

ReactDOM.render(
    <div>
        <Primeiro />
    </div>
    , root
)
