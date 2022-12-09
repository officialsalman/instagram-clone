import React from "react";
import "./../../Css/FollowersSection.css";
import { RiUserFollowLine } from "react-icons/ri";

function FollowersSection(props) {
  return (
    <>
      <div className="container-fluid text-white">
        <div className="row align-items-center text-center">
          <div className="col-3 ">
            <img
              src={props.profileImage}
              className="imrankhan-profile-pic"
              alt="imrankhan"
            />
            <h5>Imran Khan</h5>
          </div>
          <div className="col-3 ">
            <p>
              <b>{props.posts}</b>
              <br />
              <p>Posts</p>
            </p>
          </div>
          <div className="col-3 ">
            <p>
              <b>{props.followers}</b>
              <br />
              <p>Followers</p>
            </p>
          </div>
          <div className="col-3">
            <p>
              <b>{props.followings}</b>
              <br />
              <p>Following</p>
            </p>
          </div>
        </div>
        <div className="row mx-2">
          <div className="col-12">
            <p>
              <span className="text-secondary">
                {props.descriptionSubheading}
              </span>
              <br />
              {props.description}
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-5">
            <button type="button" class="btn btn-dark w-100">
              Following
            </button>
          </div>
          <div className="col-5">
            <button type="button" class="btn btn-dark w-100">
              Message
            </button>
          </div>
          <div className="col-2">
            <button type="button" class="btn btn-dark">
              <RiUserFollowLine />
            </button>
          </div>
        </div>
        <hr />
      </div>
    </>
  );
}

export default FollowersSection;
