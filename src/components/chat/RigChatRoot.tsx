import { useState, useEffect } from "react";
import axios from "axios";
import Message from "./RigChatMessage";
import "./Chat.css";

interface MessageType {
    uuid: string;
    sender: string;
    receiver: string;
    contents: string;
}

function Chat() {
    const [messages, setMessages] = useState<MessageType[]>();

    useEffect(() => {
        axios.get("http://localhost:5000/getMessages").then((response) => {
            setMessages(response.data);

        })
    }, [])

    return (
        <div className="chat-root">
            {messages ? messages.map((message: MessageType, i: number) => (
                <div className="message">
                    <Message key={i} message={message} />
                </div>

            )) : null}
            <input type="input" className="send-msg form-control"></input>
        </div>
    )
}

export default Chat;