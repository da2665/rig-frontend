import { useState, useEffect } from "react";
import axios from "axios";
import RigChatMessage from "./RigChatMessage";
import RigDashboardNavbar from "../dashboard/RigDashboardNavbar";
import "../dashboard/RigDashboard.css";
import "./RigChat.css";
import { Message } from "./Types";
import RigChatNavbar from "./RigChatNavbar";
import io from "socket.io-client";

function RigChatRoot() {
  const [messages, setMessages] = useState<Message[]>([]);
  const socket = io(process.env.REACT_APP_WEBSOCKET_URL as string);

  useEffect(() => {
    socket.on("New Message", (data: Message) => {
      setMessages([...messages, data])
    });

    socket.on("Messages", getMessages);

    return () => {
      socket.off("Messages");
      socket.off("New Message");
    };
  }, [messages]);

  const getMessages = () => {
    socket.emit("Get Messages")
  }
  const sendMessage = async (message: Message) => {
    socket.emit("Send Message", message);
  }

  const testMessage: Message = {
    id: 0, sender: "dylan.a", receiver: "test", contents: "Test Contents", attachments: "google.com.au"
  }
  return (
    <div className="rig-chat">
      <RigDashboardNavbar />
      <RigChatNavbar />
      <div className="messages">
        {messages
          ? messages.map((message: Message, i: number) => (
            <RigChatMessage key={i} message={message} />
          ))
          : null}
      </div>
      <div className="rig-chat-controls">
        <input
          type="text"
          className="form-control"
        ></input>
        <button
          className="btn btn-dark"
          onClick={() => sendMessage(testMessage)}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default RigChatRoot;
