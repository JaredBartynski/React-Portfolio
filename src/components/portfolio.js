import React from "react";
import projects from "./projects";

function Portfolio(props) {
  return (
    <>
      <div className="col justify-content-center">
        {/* <img
          onClick={props.onClick}
          id={props.projects.id}
          className="images"
          src={props.images}
        /> */}
        {projects.map((project) => (
          <div key={project.id}>
            <h1>{project.title}</h1>
            <div>
              <a href={project.deployedLink} target="_blank">
                visit the website
              </a>{" "}
              <a href={project.projectLink} target="_blank">
                github
              </a>
            </div>
            <img id={project.id} className="images" src={project.image} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Portfolio;
