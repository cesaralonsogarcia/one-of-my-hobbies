import React from 'react';
import '../styles/Navigation.css';

function Navigation() {
    return (
        <nav className="navigation">
            <div>
                <h1>CAG</h1>
                <h3>Cesar Alonso Garcia</h3>
            </div>
            <ul>
                <li><a href="#about">About me</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
                <li><a href="https://drive.google.com/file/d/1N9Zu6hYV0Y6g0p7Z1L9q2X8RJZy9x8Jb/view?us">Resume</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;