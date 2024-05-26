import React, {useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Home from './pages/home'
import  About from './pages/about'
import  Contactus from './pages/contactus'
import ReactGA from 'react-ga';
const TRACKING_ID = "G-0DLEPE47ZD"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID);
export default function App(){
    return (
        <div>
            <Router>
                <Routes>
                    <Route index element={<Home/>}></Route>
                    <Route path="/home" element={<Home/>}></Route>
                    <Route path="/about" element={<About/>}></Route>
                    <Route path="/contactus" element={<Contactus/>}></Route>
                </Routes>
            </Router>
        </div>
    )
}

