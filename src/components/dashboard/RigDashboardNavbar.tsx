import "./RigDashboard.css";
import { Link } from "react-router-dom";

function RigDashboardNavbar() {
    const modules: string[] = ["Chat", "Posts", "Voice", "Friends", "Settings"];
    
    function getPage(module: string): string {
        return module.toLowerCase();
    }

    return (
        <div className="bg-dark rig-navbar">
            { modules.map((item, i) => (
                <Link to={getPage(item)} key={i} className="text-decoration-none btn btn-link">{item}</Link>
            ))}
        </div>
    )
}

export default RigDashboardNavbar;