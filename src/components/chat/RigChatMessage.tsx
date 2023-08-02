import "./Chat.css";

interface MessageType {
    uuid: string;
    sender: string;
    receiver: string;
    contents: string;
}

function Message(props: any) {
    const message: MessageType = props.message;
    return (
        <div className="message-root card shadow-lg">
            <h5>{message.sender}</h5>
            <p>{message.contents}</p>
        </div>
    )
}

export default Message;