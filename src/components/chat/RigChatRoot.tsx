import { useState, useEffect } from "react";
import axios from "axios";
import RigChatMessage from "./RigChatMessage";
import RigDashboardNavbar from "../dashboard/RigDashboardNavbar";
import "../dashboard/RigDashboard.css";
import "./RigChat.css";
import { Message } from "./Types";
import RigChatNavbar from "./RigChatNavbar";

function RigChatRoot() {
  const [messages, setMessages] = useState<Message[]>();
  const [currentMessage, setCurrentMessage] = useState<string>();

  // TODO
  useEffect(() => {
    const interval = setInterval(() => {
      axios.get("http://localhost:5000/getMessages").then((response) => {
        setMessages(response.data);
      });
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  });

  async function sendMessage(messageContent: string) {
    const request: Message = {
      id: 0,
      sender: "dylan",
      receiver: "test",
      contents: "test",
      attachments: "https://www.google.com",
    };
    await axios.post("http://localhost:5000/sendMessage", null, {
      params: request,
    });
  }

  function changeMessage(event: any) {
    setCurrentMessage(event.target.value);
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
          onChange={() => changeMessage}
          type="text"
          className="form-control"
        ></input>
        <button
          className="btn btn-dark"
          onClick={() => sendMessage(currentMessage as string)}
        >
          Send
        </button>
      </div>
    </div>
  );
}

export default RigChatRoot;
