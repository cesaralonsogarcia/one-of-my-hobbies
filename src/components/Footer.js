import React from "react";
import '../styles/Footer.css';

// This function displays the Footer

function Footer() {
    return (
        <footer className="footer">
            <a 
            href="linkedin.com"
            onClick={() => window.open("https://www.linkedin.com/in/cesaralonsogarcia/")}
            >
            <img alt="LinkedIn" src="https://img.icons8.com/fluent/48/000000/linkedin.png"/>
            </a>
            <a
            href="github.com"
            onClick={() => window.open("https://www.github.com/cesaralonsogarcia/")}
            >
            <img alt="GitHub" src="https://img.icons8.com/fluent/48/000000/github.png"/>
            </a>
        </footer>
    );
}

export default Footer;