import { Link } from 'gatsby';
import React from 'react'

const Navbar = () => {
    return (
        <nav>
            <h1>ROSEMARIE SUTANTO</h1>
            <div>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/portfolio">Portfolio</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    )
}

export default Navbar;