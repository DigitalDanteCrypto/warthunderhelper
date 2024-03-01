import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Ruban from './Components/Ruban'
import EnnemiesDisplay from './Components/Ennemies/EnnemiesDisplay'
import UserPlane from './Components/User/UserPlane'
import {PlanesProvider} from './Service/PlaneContext';
import Footer from './Components/Footer';
import About from './Components/About/About';



function App() {


    return (
        <>
        <Router>
            <PlanesProvider>
                <Routes>
                    <Route path="/" element={<><Ruban/><EnnemiesDisplay/><UserPlane/><Footer/></>} />
                    <Route path="/about" element={<About />} />
                </Routes>
               
            </PlanesProvider>
        </Router>
        </>
    )
}

export default App
