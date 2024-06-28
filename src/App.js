// src/App.js
import React from 'react';
import Home from './components/Home';
import About from './components/About';
import Works from './components/Works';
import { Link, Element, scroller } from 'react-scroll';
import './App.css';

function App() {
    const handleSetActive = (to) => {
        scroller.scrollTo(to, {
            duration: 3000,
            delay: 0,
            smooth: 'easeInOutQuart'
        });
    };

    return (
        <div className="App">
            <div className="nav">
            <div className="left-nav">
            <span className="brand-name">Portfolio</span>
            </div>
            <div className='right-nav'>
              <Link className="nav-link" to="home" smooth={true} duration={800}>
                  Home
              </Link>
              <Link className="nav-link" to="about" smooth={true} duration={800}>
                  About
              </Link>
              <Link className="nav-link" to="works" smooth={true} duration={800}>
                  Works
              </Link>
            </div>

            </div>
            <Element name="home"><Home /></Element>
            <Element name="about"><About /></Element>
            <Element name="works"><Works /></Element>
        </div>
    );
}

export default App;
