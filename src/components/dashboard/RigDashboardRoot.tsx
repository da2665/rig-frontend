import RigDashboardNavbar from "./RigDashboardNavbar";
import "./RigDashboard.css";
import RigDashboardContents from "./RigDashboardContents";
import { useEffect } from "react";
import axios from "axios";

function RigDashboardRoot() {
    // Get updates once Dashboard has loaded
    useEffect(() => {
        axios.get("http://localhost:5000/getUpdates").then((response) => {
            if (response.data !== process.env.REACT_APP_VERSION) {
                alert(`Updating Rig to v${response.data}`)
            }
        })
    }, []);

    return (
        <div className="rig-dashboard">
            <RigDashboardNavbar />
            <RigDashboardContents />
        </div>
    )
}

export default RigDashboardRoot;