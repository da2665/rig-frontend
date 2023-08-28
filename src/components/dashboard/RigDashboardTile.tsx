import "./RigDashboard.css";
import { Tile } from "./Types";

function RigDashboardTile(props: any) {
    const tile: Tile = props.tile;
    return (
        <div className="rig-tile card shadow-lg bg-dark text-white">
            <h5>{tile.title}</h5>
            <p>{tile.contents}</p>
            <button type="button" className="btn btn-secondary">{tile.buttonText}</button>
        </div>
    )
}

export default RigDashboardTile;