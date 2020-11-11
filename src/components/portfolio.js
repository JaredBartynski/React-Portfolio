import React from "react";

function Project(props) {
  return (
    <>
      <div className="col d-flex justify-content-center">
        <img
          onClick={props.onClick}
          id={props.imgID}
          className="border rounded portfolioImg"
          src={props.portfolioImg}
        />
      </div>
    </>
  );
}

export default portfolio;
