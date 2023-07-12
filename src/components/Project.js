import React from 'react';
import '../styles/Project.css';

function Project() {
    return (
        <section className="project">
            <h2>Projects</h2>
            <div className="project-container">
                <div className="project-card">
                    <h3>Project 1</h3>
                    <img src="https://via.placeholder.com/150" alt="Project 1" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                    </div>
                <div className="project-card">
                    <h3>Project 2</h3>
                    <img src="https://via.placeholder.com/150" alt="Project 2" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.</p>
                </div>
                </div>
            </section>
    );
}

export default Project;