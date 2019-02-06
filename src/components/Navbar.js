import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';

const Navbar = (props) => {
  
    // console.log(props); <- empty without withRouter
    return(
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <Link to="/" className="brand-logo">Navbar title</Link>
            </div>
            <ul className="right">
                <li><Link to="/">Home</Link></li>
                <li><NavLink to="/about">About</NavLink></li>
                <li><NavLink to="/contact">Contact</NavLink></li>
            </ul>
        </nav>
    )
}

export default withRouter(Navbar);