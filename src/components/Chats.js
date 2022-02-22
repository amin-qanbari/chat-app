import React from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
//css
import styles from "./Chats.module.css";

//components
import Navbar from "./Navbar";
import { ChatEngine } from "react-chat-engine";

const Chats = () => {
  const navigate = useNavigate();

  const logoutHandler = async () => {
    auth.signOut();
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <Navbar logoutHandler={logoutHandler} />
      <ChatEngine
        height="calc(100vh - 50px)"
        projectID="7eb84ea2-46e4-4e57-b554-599e15413ccb"
        userName="."
        userSecret="."
      />
    </div>
  );
};

export default Chats;
