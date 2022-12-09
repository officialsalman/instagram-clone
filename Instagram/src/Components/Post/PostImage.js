import React from "react";
import "./../../Css/PostImage.css";

function PostImage(props) {
  return (
    <div className="container-fluid gx-0 postimage-container">
      <img src={props.postImage} className="postimage-img" alt="khan" />
    </div>
  );
}

export default PostImage;
