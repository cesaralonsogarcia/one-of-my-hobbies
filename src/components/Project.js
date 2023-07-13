import React from "react";
import "../styles/Project.css";

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
          <a href="" className="btn btn-info mx-3">
            App
          </a>
          <a href="" className="btn btn-dark mx-3">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
