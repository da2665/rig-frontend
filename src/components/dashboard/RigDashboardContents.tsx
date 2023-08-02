import "./RigDashboard.css";
import RigDashboardTile from "./RigDashboardTile";

interface Tile {
    title: string;
    contents: string;
    buttonText: string;
}


function RigDashboardContents() {
    const tiles: Tile[] = [
        {
            title: "Check Out Rig Posts",
            contents: "See what your friends are up to today... maybe they are travelling and they are sharing some awesome photos.",
            buttonText: "Take me to Posts"
        },
        {
            title: "Check Out Rig Voice",
            contents: "We are proud of building this one. Have a go at it, it will be great to call your overseas family and friends over Voice chat, that way your never away from them.",
            buttonText: "Take me to Voice"
        },
        {
            title: "Look for Friends using Rig Friends",
            contents: "See where your Friends are and start adding them!",
            buttonText: "Take me to Friends"
        }
    ];

    return (
        <div className="rig-dashboard-contents">
            <h3>Rig v{process.env.REACT_APP_VERSION ? process.env.REACT_APP_VERSION : null }</h3>
            <div className="rig-dashboard-tiles">
            {tiles.map((tile, i) => (
                <RigDashboardTile key={i} tile={tile} />
            ))}
            </div>
        </div>
    )
}

export default RigDashboardContents;