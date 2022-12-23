import React from 'react';
import Home from '../features/Home';
import About from '../features/About';
import Randomizer from '../features/Randomizer';
import { Routes, Route } from "react-router-dom";

const AppRoutes = (props) => {
    return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="questions" element={<Randomizer />} />
        <Route path="about" element={<About />} />
    </Routes>
    )   
}

export default AppRoutes;