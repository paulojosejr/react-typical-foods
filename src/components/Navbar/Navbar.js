import React from 'react'
import './Navbar.scss'
import logo from '../../logo.png'
import {Link} from 'react-router-dom'

export default function Navbar() {
    return <nav className="navbar">
        <Link to="/">
            <img className="logo" src={logo} alt='food tours logo' />
        </Link>
        <ul className="nav-links">
            <li>
                <Link to="/" className="nav-link">
                    Home
                </Link>
            </li>
            <li>
                <Link to="/foods" className="nav-link">
                    Foods
                </Link>
            </li>
            <li>
                <Link to="/about" className="nav-link">
                    About
                </Link>
            </li>
        </ul>
    </nav>

}