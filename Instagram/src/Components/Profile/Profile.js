import React from "react";
import Nav from "../Nav/Nav";
import FollowersSection from "./FollowersSection";
import ProfileNav from "./ProfileNav";
import imrankhan from "./../../Images/imrankhan.jpg";
import PhotoSection from "./PhotoSection";
import post1 from "./../../Images/post1.jfif";
import post2 from "./../../Images/post2.jfif";
import post3 from "./../../Images/post3.jfif";
import post4 from "./../../Images/post4.jfif";
import post5 from "./../../Images/post5.jfif";
import post6 from "./../../Images/post6.jfif";
import post7 from "./../../Images/post7.jfif";
import post8 from "./../../Images/post8.jfif";
import post9 from "./../../Images/post9.jfif";

function Profile() {
  return (
    <>
      <Nav />
      <ProfileNav username="imrankhan.pti" />
      <FollowersSection
        profileImage={imrankhan}
        posts="13.7 k"
        followers="7.8 M"
        followings="1 "
        descriptionSubheading="Politician"
        description="Chairman Pakistan Tehreek e Insaaf (@PTIOfficial) & Former Prime Minister of Islamic Republic of Pakistan."
      />
      <PhotoSection
        post1={post1}
        post2={post2}
        post3={post3}
        post4={post4}
        post5={post5}
        post6={post6}
        post7={post7}
        post8={post8}
        post9={post9}
      />
    </>
  );
}

export default Profile;
