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
  }, []);

  useEffect(() => {
    socket.connect();

    getMessages();

    socket.on("New Message", (data: Message) => {
      setMessages((prevMessage) => [...prevMessage, data]);
    });

    socket.once("Initial Messages", (data: Message[]) => {
      setMessages(data);
    });

    return () => {
      socket.disconnect();
      socket.off("New Message");
      socket.off("Initial Messages");
    };
  }, []);

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
          placeholder="Type away..."
          type="text"
          value={message}
          className="form-control bg-dark"
        ></input>
        <button type="submit" className="btn btn-dark" onClick={() => sendMessage()}>
          Send
        </button>
      </div>
    </div>
  );
}

export default RigChatRoot;
