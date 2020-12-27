import React, { Component } from 'react';
import { NavItems } from './NavItems';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return(
            <nav className="NavbarItems">
                <a className="navbar-title" href="#main-section">Truman Be</a>
                <ul className='nav-menu'>
                    {NavItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <a className="nav-section" href={item.link}>{item.title}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar