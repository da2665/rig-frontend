import "./RigChat.css";
import logo from "../../assets/logo.png";

function RigChatNavbar() {

    // Currently testing UI, so no dm users/friends pulled from backend and DB yet.

    return (
        <div className="rig-chat-navbar">
            <p>Direct Messages</p>
            <img src={logo} className="user-photo" alt="user"></img>
        </div>
    )
}

export default RigChatNavbar;