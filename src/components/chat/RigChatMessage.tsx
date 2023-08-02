import "./RigChat.css";

interface Message {
    uuid: string;
    sender: string;
    receiver: string;
    contents: string;
}

function RigChatMessage(props: any) {
    const message: Message = props.message;
    return (
        <div className="message-item card shadow-lg bg-dark">
            <h5>{message.sender}</h5>
            <p>{message.contents}</p>
        </div>
    )
}

export default RigChatMessage;