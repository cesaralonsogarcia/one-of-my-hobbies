import React, { useState } from 'react';
import '../styles/Header.css';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Navigation from './Navigation';
import Footer from './Footer';

function Header() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
        <header className="header py-2">
            <div>
                <h1>CAG</h1>
                <h3>Cesar Alonso Garcia</h3>
            </div>
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange}/>
        </header>
        {renderPage()}
        <Footer />
        </div>
    );
}

export default Header;