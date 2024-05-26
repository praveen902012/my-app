import React, {useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import  Home from './pages/home'
import  About from './pages/about'
import  Contactus from './pages/contactus'
import ReactGA from "react-analytics-ga4";
const TRACKING_ID = "G-0DLEPE47ZD"; // OUR_TRACKING_ID
ReactGA.initialize(TRACKING_ID,{ debug: true });
export default function App(){
    useEffect(() => {
        //ReactGA.pageview(window.location.pathname + window.location.search);
        // Send pageview with a custom path
        ReactGA.send({ hitType: "pageview", page: "/my-path", title: "Custom Title" });

// Send a custom event
        ReactGA.event({
            category: "your category",
            action: "your action",
            label: "your label", // optional
            value: 99, // optional, must be a number
            nonInteraction: true, // optional, true/false
            transport: "xhr", // optional, beacon/xhr/image
        });

    }, []);
    return (
        <div>
            <menu>
                <a href={"/home"}>Home</a>
                <a href={"/about"}>About</a>
                <a href={"/contactus"}>Contact Us</a>
            </menu>
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

