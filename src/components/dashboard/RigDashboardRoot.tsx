import RigDashboardNavbar from "./RigDashboardNavbar";
import "./RigDashboard.css";
import RigDashboardContents from "./RigDashboardContents";

function Home() {
    return (
        <div className="rig-dashboard">
            <RigDashboardNavbar />
            <RigDashboardContents />
        </div>
    )
}

export default Home;