import React, { useState } from 'react';
import Typing from './Typing';

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <nav>
            <h1>
                Rohan <span id="typing"><Typing /></span>
            </h1>

            <ul className={`navigation ${open ? 'open' : ''}`}>
                <li><a href="#about" className="nav-link" onClick={() => setOpen(false)}>About</a></li>
                <li><a href="#skills" className="nav-link" onClick={() => setOpen(false)}>Skills</a></li>
                <li><a href="#projects" className="nav-link" onClick={() => setOpen(false)}>Projects</a></li>
                <li><a href="#education" className="nav-link" onClick={() => setOpen(false)}>Education</a></li>
                <li><a href="#contact" className="nav-link" onClick={() => setOpen(false)}>Contact</a></li>
            </ul>

            <button className="burger-menu" id="burger-menu" onClick={() => setOpen(s => !s)}>
                <ion-icon class="bars" name="menu-outline"></ion-icon>
            </button>
        </nav>
    );
}
