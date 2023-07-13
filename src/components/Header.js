import React, { useState } from 'react';
import '../styles/Header.css';
import AboutMe from './pages/AboutMe/AboutMe';
import Portfolio from './pages/Portfolio/Portfolio';
import Contact from './pages/Contact';
import Resume from './pages/Resume/Resume';
import Navigation from './Navigation';
import Footer from './Footer';

// Array of objects for the projects

const projects = [
    {
        id: 1,
        name: 'FurFaceBook',
        image: 'furfacebook',
        github: 'https://github.com/Williamatthewood/FurFaceBook',
        deployed: 'https://furfacebook-app.herokuapp.com/',
    },
    {
        id: 2,
        name: 'Weather Dashboard',
        image: 'weather-dashboard',
        github: 'https://github.com/cesaralonsogarcia/weather-dashboard',
        deployed: 'https://cesaralonsogarcia.github.io/weather-dashboard/',
    },
    {
        id: 3,
        name: 'Work Day Scheduler',
        image: 'work-day-scheduler',
        github: 'https://github.com/cesaralonsogarcia/work-day-scheduler',
        deployed: 'https://cesaralonsogarcia.github.io/work-day-scheduler/',
    },
    {
        id: 4,
        name: 'Code Quiz',
        image: 'code-quiz',
        github: 'https://github.com/cesaralonsogarcia/code-quiz',
        deployed: 'https://cesaralonsogarcia.github.io/code-quiz/',
    },
    {
        id: 5,
        name: 'Password Generator',
        image: 'password-generator-screenshot',
        github: 'https://github.com/cesaralonsogarcia/password-generator',
        deployed: 'https://cesaralonsogarcia.github.io/password-generator/',
    },
    {
        id: 6,
        name: 'Note Taker',
        image: 'note-taker-screenshot',
        github: 'https://github.com/cesaralonsogarcia/note-taker',
        deployed: 'https://cag-note-taker-app.herokuapp.com/',
    },
];

// This function displays the Header

function Header() {
    const [currentPage, setCurrentPage] = useState('AboutMe');

    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio projects={projects}/>;
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