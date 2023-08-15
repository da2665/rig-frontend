import "./RigDashboard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGauge, faGears, faHashtag, faMessage, faPeopleArrows, faPhone } from "@fortawesome/free-solid-svg-icons";

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
        <div className="bg-dark rig-navbar">
            <div className="rig-inner-navbar">
                {modules.map((item: string, i: number) => (
                    <Link to={route(item)} key={i} className="text-decoration-none btn btn-dark"><FontAwesomeIcon className="icon" icon={getIcon(item)} /></Link>
                ))}
            </div>
        </div>
    )
}

export default RigDashboardNavbar;