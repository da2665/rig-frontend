import { useState, useEffect } from "react";
import axios from "axios";
import RigChatMessage from "./RigChatMessage";
import RigDashboardNavbar from "../dashboard/RigDashboardNavbar";
import "../dashboard/RigDashboard.css";
import "./RigChat.css";

interface Message {
    uuid: string;
    sender: string;
    receiver: string;
    contents: string;
}

function RigChatRoot() {
    const [messages, setMessages] = useState<Message[]>();

    useEffect(() => {
        axios.get("http://localhost:5000/getMessages").then((response) => {
            setMessages(response.data);

        })
    }, [])

    return (
        <div className="rig-chat">
            <RigDashboardNavbar />
            <div className="messages">
                {messages ? messages.map((message: Message, i: number) => (
                    <RigChatMessage key={i} message={message} />
                )) : null}
            </div>
            <input type="input" className="send-msg form-control"></input>
        </div>
    )
}

export default RigChatRoot;