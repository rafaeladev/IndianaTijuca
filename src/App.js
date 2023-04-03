import React from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import { LngProvider } from './utils/context.jsx';

import Layout from './components/Layout';

import Home from './pages/Home';
import Historico from './pages/Historico';
import About from './pages/About';
import Natal from './pages/Natal.jsx';

const App = () => {
    return (
        <HashRouter>
            <LngProvider>
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
                            path='/natal'
                            element={<Natal />}
                        />
                        <Route
                            path='/historico'
                            element={<Historico />}
                        />
                        <Route
                            path='/infos'
                            element={<About />}
                        />
                    </Route>
                </Routes>
            </LngProvider>
        </HashRouter>
    );
};

export default App;
