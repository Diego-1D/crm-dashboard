import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from '../pages/Dashboard';
import Customers from '../pages/Customers';

const Rotas = () => {
    return (
        <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route exact path="/customers" element={<Customers />} />
        </Routes>
    )
}

export default Rotas;