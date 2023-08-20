import "./RigDashboard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge, faGears, faHashtag, faMessage, faPeopleArrows, faPhone } from "@fortawesome/free-solid-svg-icons";
import logo from "../../assets/logo.png";

function RigDashboardNavbar() {
    const modules: string[] = ["Dashboard", "Chat", "Posts", "Voice", "Friends", "Settings"];

    function route(module: string): string {
        if (window.location.href.includes(module.toLowerCase())) {
            return "";
        } else if (module.toLowerCase() === "dashboard") {
            return "/";
        }
        return `/${module.toLowerCase()}`;
    }

    function getIcon(module: string): any {
        switch (module) {
            case "Dashboard":
                return faGauge
            case "Chat":
                return faMessage
            case "Posts":
                return faHashtag
            case "Voice":
                return faPhone
            case "Friends":
                return faPeopleArrows
            case "Settings":
                return faGears
        }
    }

    return (
        <div className="rig-navbar shadow">
            <img className="logo" src={logo} alt="Swipe Tech"></img>
            { modules.map((item: string, i: number) => (
                <Link to={route(item)} key={i} className="text-decoration-none nav-btn btn btn-link"><FontAwesomeIcon className="icon" icon={getIcon(item)} /></Link>
            ))} 
        </div>
    )
}

export default RigDashboardNavbar;