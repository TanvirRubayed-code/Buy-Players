import React from 'react';
import logo from '../../Images/logo.png';
import './Header.css';
const Header = () => {

    return (
        <div className="header">
            <img src={logo} alt=""/>
            <nav>
                <a href="#">Players</a>
                <a href="#">Shop</a>
                <a href="#">Buy</a>
                
            </nav>
        </div>
    );
};

export default Header;