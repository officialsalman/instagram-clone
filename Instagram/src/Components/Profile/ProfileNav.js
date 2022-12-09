import React from "react";
import "./../../Css/ProfileNav.css";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { MdVerified } from "react-icons/md";
import { BsBell } from "react-icons/bs";

function ProfileNav(props) {
  return (
    <>
      <div className="container-fluid ">
        <div className="row text-white">
          <div className="col-4 d-flex justify-content-start">
            <AiOutlineArrowLeft className="arrow-size" />
          </div>
          <div className="col-4 d-flex justify-content-center">
            {props.username}
            <span className="text-primary">
              <MdVerified />
            </span>
          </div>
          <div className="col-4 d-flex justify-content-end">
            <BsBell className="arrow-size" />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfileNav;
