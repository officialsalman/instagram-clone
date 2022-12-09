import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { AiOutlinePlus } from "react-icons/ai";
import "./../../Css/MessagesNav.css";

function MessagesNav() {
  return (
    <>
      <div className="container-fluid">
        <div className="row text-white align-items-center">
          <div className="col-4 d-flex justify-content-start ">
            <AiOutlineArrowLeft className="messages-nav-size" />
          </div>
          <div className="col-4 d-flex justify-content-center">
            <h5 className="messages-nav-size">Salman Naeem</h5>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <AiOutlinePlus className="messages-nav-size" />
          </div>
        </div>
        <div className="row">
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span
                className="input-group-text bg-dark text-white"
                id="basic-addon1"
              >
                @
              </span>
            </div>
            <input
              type="text"
              className="form-control bg-dark text-white"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="basic-addon1"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default MessagesNav;
