import './Navbar.css';
import { useState } from 'react';

function Navbar() { 
   
    const [menuState, setMenuState] = useState(false);

    const handleMenu = () => {
        setMenuState(!menuState);
    }

    return(
        <nav>
            <div className="logo">
                Young Paws
            </div>
            <ul className={`nav-links ${ menuState ? "nav-active" : "" }`}> 
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Gallery</a></li>
                <li><a href="#">Contact</a></li>
            </ul>
            <div className="burger" onClick={handleMenu}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}

export default Navbar;