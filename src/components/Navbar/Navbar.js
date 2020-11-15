import React from 'react'
import './Navbar.scss'
import logo from '../../logo.png'

export default function Navbar() {
    return <nav className="navbar">
        <a href="/">
            <img className="logo" src={logo} alt='food tours logo' />
        </a>
        <ul className="nav-links">
            <li>
                <a href="/" className="nav-link">
                    Home
                </a>
            </li>
            <li>
                <a href="/" className="nav-link">
                    Foods
                </a>
            </li>
            <li>
                <a href="/" className="nav-link">
                    About
                </a>
            </li>
        </ul>
    </nav>

}