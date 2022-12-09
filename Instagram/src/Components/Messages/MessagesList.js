import React from "react";
import "./../../Css/MessagesList.css";
function MessagesList(props) {
  return (
    <>
      <div className="container-fluid text-white ">
        <div className="row gx-0 align-items-center">
          <div className="col-3 d-flex justify-content-start messages-list-image">
            <img
              src={props.image}
              className="messages-list-image1 img-fluid"
              alt="first-one"
            />
          </div>
          <div className="col-6 d-flex flex-column justify-content-start content-pos">
            <p>{props.username}</p>
            <p className="text-secondary text-truncate">{props.message}</p>
          </div>
          <div className="col-3 "></div>
        </div>
      </div>
    </>
  );
}

export default MessagesList;
