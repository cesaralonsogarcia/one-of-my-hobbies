import React from "react";
import "../styles/Project.css";

// This function contains the cards for the projects

function Project(props) {
  return (
    <div className="col-sm-4">
      <div className="card m-3">
        <img
          src={require("./pages/Portfolio/images/" + props.image + ".png")}
          className="card-img-top"
          alt={props.name}
        />
        <div className="card-body text-center">
          <h5 className="card-title">{props.name}</h5>
          <a href={props.deployed} className="btn btn-info mx-3">
            App
          </a>
          <a href={props.github} className="btn btn-dark mx-3">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
