import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import TelaLogin from './TelaLogin';
import TelaCadastro from './TelaCadastro';
import TelaRegistros from './TelaRegistros';
import TelaNovaEntrada from './TelaNovaEntrada';
import TelaNovaSaida from './TelaNovaSaida';

export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<TelaLogin />} />
                <Route path="/cadastro" element={<TelaCadastro />} />
                <Route path="/registros" element={<TelaRegistros />} />
                <Route path="/entradas" element={<TelaNovaEntrada />} />
                <Route path="/saidas" element={<TelaNovaSaida />} />
            </Routes>
        </BrowserRouter>
    )
}