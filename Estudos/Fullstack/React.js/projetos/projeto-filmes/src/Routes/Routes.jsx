import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from '../Components/Header/Header'

import PaginaDetalhe from '../Pages/Detalhe/Detalhe'
import PaginaHome from '../Pages/Home/Home'
import PaginaFavoritos from '../Pages/Favoritos/Favoritos'
import PaginaErro from '../Pages/Erro/Erro'

export default function routesApp() {
    return (
        <BrowserRouter>

            <Header />

            <Routes>
                <Route path='/' element={<PaginaHome />} />
                <Route path='/detalhe/:id' element={<PaginaDetalhe />} />
                <Route path='/meusFavoritos' element={<PaginaFavoritos />}/>
                <Route path='*' element={<PaginaErro />} />
            </Routes>
        </BrowserRouter>
    )
}