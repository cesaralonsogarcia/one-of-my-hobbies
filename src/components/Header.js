import React from 'react';
import '../styles/Header.css';
import Navigation from './Navigation';

function Header() {
    return (
        <header className="header">
            <div>
                <h1>CAG</h1>
                <h3>Cesar Alonso Garcia</h3>
            </div>
            <Navigation />
        </header>
    );
}

export default Header;