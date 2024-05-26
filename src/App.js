import React, {useEffect } from 'react';
import ReactDOM from 'react-dom';
import ReactGA from 'react-ga';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const TRACKING_ID = "UA-220438183-5"; // OUR_TRACKING_ID

ReactGA.initialize(TRACKING_ID);

const ContactUs = () => (
    <div>
      <h3>Contact Us</h3>
    </div>
);

const Home = () => (
    <div>
      <h2>Home</h2>
    </div>
);

const About = () => (
    <div>
      <h2>About</h2>
    </div>
);

const App = () => {

  useEffect(() => {
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
        </Routes>
      </Router>
  );
}

export default App;