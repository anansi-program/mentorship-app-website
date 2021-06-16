import React from 'react';
import '../styles/navbar.css';

export const Navbar = () => {
    return (
        <div className="navbar">
            <div className="logo">LOGO</div>
            <div className="nav-items">
                <a href="#" className="nav-item nav-item-selected">
                    Home
                </a>
                <a href="#" className="nav-item">
                    Testimonial
                </a>
                <a href="#" className="nav-item">
                    Join Us
                </a>
                <a href="#" className="nav-item">
                    Contact Us
                </a>
            </div>
        </div>
    );
};
