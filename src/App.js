import React from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Accueil from './components/Accueil/Accueil';
import Tuto from './components/Tuto/Tuto';
import Narwhal from './components/Narwhal/Narwhal';
import Whale from './components/Whale/Whale';
import logo from './logoprogfacil.png';
import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    return (
        <div className="wrapper"> 
            <Helmet>
                <title>Progfacil</title>
                <meta name="description" content="Vous serez accompagné, formé et guidé étape par étape pour la réalisation de votre projet" />
                <meta name="theme-color" content="#008f68" />
                <meta charset="utf-8" />
            </Helmet>
            <div className="head">
                <span>tel: 06 25 54 14 66 | contact@progfacil.com </span> 
            </div>

            <BrowserRouter>
                <nav>
                    
                    <ul>
                        <img className="logoprogfacil" src={logo} alt="Logo progfacil" />
                        <li><Link to="/">Accueil</Link></li>
                        <li><Link to="/whale">Le centre de formation</Link></li>
                        <li><Link to="/tuto">Nos formations</Link></li>
                        <li><Link to="/narwhal">Contact</Link></li>
                    </ul>
                </nav>
                <Routes>
                    <Route path='/' element={<Accueil />} />
                    <Route path='/tuto' element={<Tuto />} />
                    <Route path='/narwhal' element={<Narwhal />} />
                    <Route path='/whale' element={<Whale />} />
                </Routes>
            </BrowserRouter>
        </div>);
}
export default App;
