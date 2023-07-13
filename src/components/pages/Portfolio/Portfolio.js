import React from 'react';
import Project from '../../Project';

export default function Portfolio(props) {
    return (
        <div>

            <h3 className="card m-3 p-3 border-dark">Portfolio</h3>
            <div className="row">
                {props.projects.map(project => (
                    <Project id={project.id} name={project.name} image={project.image} github={project.github} deployed={project.deployed} />
                ))}
            </div>
        </div>
    )
}