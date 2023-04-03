import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Layout from './components/Layout';

import Home from './pages/Home';
import About from './pages/About';
import Infos from './pages/Infos';

const App = () => {
    return (
        <HashRouter>
            <Routes>
                <Route
                    path='/'
                    element={<Layout />}
                >
                    <Route
                        index
                        element={<Home />}
                    />
                    <Route
                        path='/about'
                        element={<About />}
                    />
                    <Route
                        path='/infos'
                        element={<Infos />}
                    />
                </Route>
            </Routes>
        </HashRouter>
    );
};

export default App;
