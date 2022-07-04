import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import TelaLogin from './TelaLogin';
import TelaCadastro from './TelaCadastro';
import TelaRegistros from './TelaRegistros';

export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<TelaLogin />} />
                <Route path="/cadastro" element={<TelaCadastro />} />
                <Route path="/registros" element={<TelaRegistros />} />
            </Routes>
        </BrowserRouter>
    )
}