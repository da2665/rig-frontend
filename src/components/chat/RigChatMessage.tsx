import "./RigChat.css";
import { Message } from "./Types";

function RigChatMessage(props: any) {
    const message: Message = props.message;
    console.log(message);
    return (
        <div className="message-item">
            <p className="msg-contents">{message.contents}</p>
        </div>
    )
}

export default RigChatMessage;