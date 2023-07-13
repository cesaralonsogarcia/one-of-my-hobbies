import React from "react";

// This function displays the Resume section

export default function Resume() {
  return (
    <div className="card m-3" >
      <h4 className="card-header">Resume</h4>
      <div className="row card-body">
        <div className="col-sm-4 justify-content-center align-items-center">
          <a href={require("./images/cesaragarcia.pdf")} download="cesaragarcia.pdf" target="_blank" rel="noopener noreferrer">
          <img className="card-img" src={require("./images/cag-resume.PNG")} alt="CAG Resume" />
          </a>
        </div>
        <div className="col-sm-8">
          <h4 className="mt-3">Qualifications</h4>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Git</li>
            <li>APIs</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>SQL</li>
            <li>MVC</li>
            <li>NoSQL</li>
            <li>React</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
