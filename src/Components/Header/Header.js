import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div>
                <img className="logo" src={logo}></img>
            </div>
            <div>
                <nav>
                    <a href="">Shop</a>
                    <a href="">Order Review</a>
                    <a href="">Manage Inventory Here</a>
                </nav>
            </div>
        </div>
    );
};

export default Header;