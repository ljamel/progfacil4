import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Accueil from './components/Accueil/Accueil';
import Tuto from './components/Tuto/Tuto';
import Narwhal from './components/Narwhal/Narwhal';
import Whale from './components/Whale/Whale';
import logo from './logoprogfacil.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';



class App extends Component {
    state = {
        data: null
    };

    componentDidMount() {
        this.callBackendAPI()
            .then(res => this.setState({ data: res.express }))
            .catch(err => console.log(err));
    }
    // fetching the GET route from the Express server which matches the GET route from server.js
    callBackendAPI = async () => {
        const response = await fetch('/express_backend');
        const body = await response.json();

        if (response.status !== 200) {
            throw Error(body.message)
        }
        return body;
    };

    render() {
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
                <nav defaultActiveKey="/home" as="ul">
                    <img className="logoprogfacil" src={logo} alt="Logo progfacil" />
                        <Nav.Item as="li">
                            <Nav.Link href="/">Accueil</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                        <Nav.Link eventKey="link-1" href="/whale">Le centre de formation</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                        <Nav.Link eventKey="link-2" href="/tuto">Nos formations</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                        <Nav.Link eventKey="link-2" href="/narwhal">Contact</Nav.Link>
                        </Nav.Item>

                </nav>
                <Routes>
                    <Route path='/' element={<Accueil />} />
                    <Route path='/tuto' element={<Tuto />} />
                    <Route path='/narwhal' element={<Narwhal />} />
                    <Route path='/whale' element={<Whale />} />
                </Routes>
            </BrowserRouter>

            <div className="footer2">
                © 2012 Progfacil. TOUS LES DROITS SONT RÉSERVÉS.
            </div>
            </div>
        );
    }
}
export default App;
