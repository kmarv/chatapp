import React from "react";
import { useHistory } from "react-router-dom";
import { ChatEngine } from "react-chat-engine";
import { auth } from "../firebase";
import { useAuth } from "../contexts/AuthContext";

const Chats = () => {
  const history = useHistory;
  const { user } = useAuth();
  const handleLogout = async () => {
    await auth.signOut();
    history.push("/");
  };
  return (
    <div className="chats-page">
      <div className="nav-bar">
        <div className="logo-tab">Chat App</div>
        <div className="logout-tab" onClick={handleLogout}>
          logout
        </div>
      </div>

      <ChatEngine
        height="calc(100vh - 66px"
        projectId="a29a7365-986c-4541-a037-b7eca39e4141"
        userName="."
        userSecret="."
      />
    </div>
  );
};

export default Chats;
