import React from "react";
import Nav from "../Nav/Nav";
import MessagesList from "./MessagesList";
import MessagesNav from "./MessagesNav";
import MessagesData from "./../../Json/MessagesData.json";

function Messages() {
  return (
    <>
      <Nav />
      <MessagesNav />
      {MessagesData.map((data, index) => (
        <>
          <MessagesList
            key={index}
            image={data.image}
            username={data.username}
            message={data.message}
          />
        </>
      ))}
    </>
  );
}

export default Messages;
