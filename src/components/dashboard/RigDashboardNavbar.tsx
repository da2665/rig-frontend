import "./RigDashboard.css";
import { Link } from "react-router-dom";

function RigDashboardNavbar() {
    const modules: string[] = ["Dashboard", "Chat", "Posts", "Voice", "Friends", "Settings"];
    
    function route(module: string): string {
        if(window.location.href.includes(module.toLowerCase())) {
            return "";
        } else if (module.toLowerCase() === "dashboard") {
            return "/";
        }
        return "/" + module.toLowerCase();
    }

    return (
        <div className="bg-dark rig-navbar">
            { modules.map((item: string, i: number) => (
                <Link to={route(item)} key={i} className="text-decoration-none btn btn-link">{item}</Link>
            ))}
        </div>
    )
}

export default RigDashboardNavbar;