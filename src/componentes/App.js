import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import TelaLogin from './TelaLogin';
import TelaCadastro from './TelaCadastro';

export default function App () {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/login" element={<TelaLogin />} />
                <Route path="/cadastro" element={<TelaCadastro />} />
            </Routes>
        </BrowserRouter>
    )
}