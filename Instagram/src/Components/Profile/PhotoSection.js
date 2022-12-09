import React from "react";

function PhotoSection(props) {
  return (
    <>
      <div className="container-fluid">
        <div className="row gx-1">
          <div className="col-4">
            <img className="w-100 h-100" src={props.post1} alt="post1" />
          </div>
          <div className="col-4">
            <img className="w-100 h-100" src={props.post2} alt="post1" />
          </div>
          <div className="col-4">
            <img className="w-100 h-100" src={props.post3} alt="post1" />
          </div>
        </div>
        <div className="row gx-1">
          <div className="col-4">
            <img className="w-100 h-100" src={props.post4} alt="post1" />
          </div>
          <div className="col-4">
            <img className="w-100 h-100" src={props.post5} alt="post1" />
          </div>
          <div className="col-4">
            <img className="w-100 h-100" src={props.post6} alt="post1" />
          </div>
        </div>
        <div className="row gx-1">
          <div className="col-4">
            <img className="w-100 h-100" src={props.post7} alt="post1" />
          </div>
          <div className="col-4">
            <img className="w-100 h-100" src={props.post8} alt="post1" />
          </div>
          <div className="col-4">
            <img className="w-100 h-100" src={props.post9} alt="post1" />
          </div>
        </div>
      </div>
    </>
  );
}

export default PhotoSection;
