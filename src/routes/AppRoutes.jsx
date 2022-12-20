import React from 'react';
import Home from '../features/Home';
import Randomizer from '../features/Randomizer';
import { Routes, Route } from "react-router-dom";

const AppRoutes = (props) => {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="questions" element={<Randomizer />} />
    </Routes>
    )   
}

export default AppRoutes;