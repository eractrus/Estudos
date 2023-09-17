import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from '../components/Header'

import Home from '../pages/Home'
import Sobre from '../pages/Sobre'
import Contato from '../pages/Contato'
import PaginaErro from '../pages/Erro/erro'

export default function routesPages() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/sobre' element={<Sobre />} />
                <Route path='/contato' element={<Contato />} />
                <Route path='*' element={<PaginaErro />} />

            </Routes>
        </BrowserRouter>
    )
}