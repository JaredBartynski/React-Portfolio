import React from "react";

function Project(props) {
  return (
    <>
      <div className="col d-flex justify-content-center">
        <img
          onClick={props.onClick}
          id={props.projects.id}
          className="border rounded portfolioImg"
          src={props.}
        />
      </div>
    </>
  );
}

export default portfolio;
