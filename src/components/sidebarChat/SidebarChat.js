import { Avatar } from "@mui/material";
import React from "react";
import "./sidebarChat.css";

const SidebarChat = ({ addNewChat }) => {
  const createChat = () => {
    const roomName = prompt("Please enter name for chat");

    if (roomName) {
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar />
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>Last message...</p>
      </div>
    </div>
  ) : (
    <div className="sidebarChat" onClick={createChat}>
      <h2>Add new chat</h2>
    </div>
  );
};

export default SidebarChat;
