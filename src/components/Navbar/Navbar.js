import React, { Component } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Truman Be</h1>
                <ul className='nav-menu'>
                    {MenuItems.map((item, index) => {
                        return(
                            <li key={index}>
                                <h1 className={item.className}>{item.title}</h1>
                            </li>
                        )
                    })}
                </ul>
            </nav>
        )
    }
}

export default Navbar