import React from "react";
// import React, { createContext } from "react";
import PostNav from "./PostNav";
import PostImage from "./PostImage";
import BelowPost from "./BelowPost";
// import khan from "./../../Images/insta-post1.jpg";
import PostData from "./../../Json/PostData.json";

// const PostProps = createContext();

function Post() {
  return (
    <div>
      {/* <PostProps.Provider> */}
      {PostData.map((users, index) => (
        <>
          <PostNav
            key={index}
            profileImage={users.image}
            // profileImage={imrankhan}
            username={users.username}
            description={users.description}
          />
          <PostImage postImage={users.postimage} />
          <BelowPost />
        </>
      ))}

      {/* </PostProps.Provider> */}
    </div>
  );
}

export default Post;
