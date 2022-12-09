import React from "react";
import insta from "./../../Images/nav-instagram.png";
import { RiMessengerLine } from "react-icons/ri";
import "./../../Css/Nav.css";
import { NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <div className="container-fluid bg-black insta-nav">
        <div className="row insta-logo-div d-flex align-items-center position-relative">
          <div className="col-lg-6">
            <NavLink to="/">
              <img
                src={insta}
                className="insta-logo mx-3 mt-3 position-absolute top-50 start-0 translate-middle-y"
                alt="insta"
              />
            </NavLink>
          </div>
          <div className="col-lg-6">
            <NavLink to="/messages">
              <RiMessengerLine className="text-white display-6 mt-2 position-absolute top-50 end-0 translate-middle-y" />
            </NavLink>
          </div>
          <div className="hr-nav">
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
