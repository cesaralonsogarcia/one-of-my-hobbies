import React from "react";
import "../styles/Project.css";

function Project() {
  return (
    <div className="col-sm-4">
      <div className="card m-3">
        <img
          src="https://via.placeholder.com/150"
          className="card-img-top"
          alt="placeholder"
        />
        <div className="card-body">
          <h5 className="card-title">Project 1</h5>
          <p className="card-text">Description of Project 1</p>
          <a href="" className="btn btn-primary">
            Go to Project 1
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
