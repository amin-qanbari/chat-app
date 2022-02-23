import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase";
import { ChatEngine } from "react-chat-engine";
import axios from "axios";

//gif
import loader from "../gif/spinner.gif"

//css
import styles from "./Chats.module.css";

//components
import Navbar from "./Navbar";

//context
import { AuthContext } from "../Context/AthContextProvider";

const Chats = () => {
  const [loading, setLoading] = useState(true);
  const user = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate.push("/");
      return;
    }

    axios
      .get("https://api.chatengine.io/users/me", {
        headers: {
          "project-id": "7eb84ea2-46e4-4e57-b554-599e15413ccb",
          "user-name": user.email,
          "user-secret": user.uid,
        },
      })
      .then(() => {
        setLoading(false);
      })
      .catch(() => {
        let formdata = new FormData();
        formdata.append("email", user.email);
        formdata.append("username", user.email);
        formdata.append("secret", user.uid);
        getFile(user.photoURL).then((avatar) => {
          formdata.append("avatar", avatar, avatar.name);
          axios
            .post("https://api.chatengine.io/users/", formdata, {
              headers: {
                "private-key": "83722fd8-c4a1-4c74-8aec-3666a18ec5f5",
              },
            })
            .then(() => setLoading(false))
            .catch((error) => console.log(error));
        });
      });
  }, [user, navigate]);

  const getFile = async (url) => {
    const response = await fetch(url);
    const data = await response.blob();
    return new File([data], "userPhoto.jpg", { type: "image/jpeg" });
  };

  const logoutHandler = async () => {
    await auth.signOut();
    navigate("/");
  };

  if (!user || loading)
    return (
      <div>
        <img src={loader} alt="spinner" />
        <h3>loading...</h3>
      </div>
    );

  return (
    <div className={styles.container}>
      <Navbar logoutHandler={logoutHandler} />
      <ChatEngine
        height="calc(100vh - 50px)"
        projectID="7eb84ea2-46e4-4e57-b554-599e15413ccb"
        userName={user.email}
        userSecret={user.uid}
      />
    </div>
  );
};

export default Chats;
