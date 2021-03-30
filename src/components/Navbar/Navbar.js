import './Navbar.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from '../About/About';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import Gallery from '../Gallery/Gallery';

function Navbar() { 
   
    const [menuState, setMenuState] = useState(false);

    const handleMenu = () => {
        setMenuState(!menuState);
    }

    return(
        <Router>
            <nav>
                <div className="logo">
                    Young Paws
                </div>
                <ul className={`nav-links ${ menuState ? "nav-active" : "" }`}> 
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/gallery">Gallery</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
                <div className="burger" onClick={handleMenu}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
            
            <Switch>
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/gallery">
                    <Gallery />
                </Route>
                <Route path="/contact">
                    <Contact />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </Router>
    )
}

export default Navbar;