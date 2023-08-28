import { io } from "socket.io-client";
import { useState, useEffect } from "react";
import RigChatMessage from "./RigChatMessage";
import RigDashboardNavbar from "../dashboard/RigDashboardNavbar";
import "../dashboard/RigDashboard.css";
import "./RigChat.css";
import { Message } from "./Types";
import RigChatNavbar from "./RigChatNavbar";

function RigChatRoot() {
  const [messages, setMessages] = useState<any>([]);
  const socket = io(process.env.REACT_APP_WEBSOCKET_URL as string);

  useEffect(() => {
    // Todo
    socket.open();
    socket.emit("Get Messages");
    socket.on("Messages", (data: Message[]) => {
      setMessages(data);
    });
    return () => {
      socket.close();
    }
  }, []);

  const sendMessage = () => {
    socket.emit("Send Message", {
      id: null,
      sender: "da2665",
      receiver: "john.doe",
      contents: "New test message",
      attachments: ""
    });
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
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default RigChatRoot;
