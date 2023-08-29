import { useState, useEffect, useCallback } from "react";
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
  const [message, setMessage] = useState<string>("");

  const getMessages = useCallback(() => {
    socket.emit("Get Messages");
  }, [socket]);

  useEffect(() => {
    socket.connect();
    socket.on("New Message", (data: Message) => {
      setMessages((prevMessage) => [...prevMessage, data]);
    });

    socket.on("Initial Messages", (data: Message[]) => {
      setMessages(data);
    });

    getMessages();

    return () => {
      socket.disconnect();
    };
  }, [socket]);

  const sendMessage = () => {
    socket.emit("Send Message", {
      id: 0,
      sender: "Dylan",
      receiver: "Test User",
      contents: message,
      attachments: "",
    });
  };

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
          onChange={(e) => setMessage(e.target.value)}
          type="text"
          value={message}
          className="form-control"
        ></input>
        <button className="btn btn-dark" onClick={() => sendMessage()}>
          Send
        </button>
      </div>
    </div>
  );
}

export default RigChatRoot;
