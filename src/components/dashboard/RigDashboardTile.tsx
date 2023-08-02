import "./RigDashboard.css";

interface Tile {
    title: string;
    contents: string;
    buttonText: string;
}

function RigDashboardTile(props: any) {
    const tile: Tile = props.tile;
    return (
        <div className="rig-tile card shadow-lg bg-dark text-white">
            <h5>{tile.title}</h5>
            <p>{tile.contents}</p>
            <button type="button" className="btn btn-primary">{tile.buttonText}</button>
        </div>
    )
}

export default RigDashboardTile;