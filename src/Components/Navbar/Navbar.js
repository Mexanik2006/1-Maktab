import React from 'react';
import "./Navbar.css"

function Navbar() {
    return (
        <div className='Navbar'>
            <div className="navbar_logo">
                <h1>
                    <a href="/">1-Maktab</a>
                </h1>
            </div>
            <div className="links">
                <ul>
                    <a href="/">
                        <li>Home</li>
                    </a>
                    <a href="/class">
                        <li>Class</li>
                    </a>
                    <a href="/work">
                        <li>Work</li>
                    </a>
                    <a href="/contact">
                        <li>Contact</li>
                    </a>
                </ul>
            </div>
        </div>
    )
}

export default Navbar