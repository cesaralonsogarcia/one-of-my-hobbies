import React, { useState } from 'react';
import AboutMe from './pages/AboutMe';
import Portfolio from './pages/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Navigation from './Navigation';
import Header from './Header';

export default function PortfolioContainer() {
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
            <Header />
            <Navigation currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    );
}