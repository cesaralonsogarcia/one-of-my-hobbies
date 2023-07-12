import React from 'react';
import Project from '../Project';

export default function Portfolio() {
    return (
        <div>

            <h3 className="card m-3 p-3 border-dark">Portfolio</h3>
            <div className="row">
                <Project />
                <Project />
                <Project />
            </div>
            <div className="row">
                <Project />
                <Project />
                <Project />
            </div>
        </div>
    )
}