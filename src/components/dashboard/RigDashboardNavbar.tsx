import "./RigDashboard.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGauge,
  faGears,
  faHashtag,
  faMessage,
  faPeopleArrows,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "react-tooltip";

function RigDashboardNavbar() {
  const modules: string[] = [
    "Dashboard",
    "Messaging",
    "Channels",
    "Meetings",
    "Directory",
    "Settings",
  ];

  const route = (module: string): string => {
    if (window.location.href.includes(module.toLowerCase())) {
      return "";
    } else if (module.toLowerCase() === "dashboard") {
      return "/";
    }
    return `/${module.toLowerCase()}`;
  };

  const getIcon = (module: string): any => {
    switch (module) {
      case "Dashboard":
        return faGauge;
      case "Messaging":
        return faMessage;
      case "Channels":
        return faHashtag;
      case "Meetings":
        return faPhone;
      case "Directory":
        return faPeopleArrows;
      case "Settings":
        return faGears;
    }
  };

  const logOff = () => {
    localStorage.removeItem("Token");
    window.location.href = "/";
  };

  return (
    <div className="rig-navbar">
      {modules.map((item: string, i: number) => (
        <div>
        <Link
          to={route(item)}
          key={i}
          className="text-decoration-none nav-btn btn btn-link"
          id={item}
        >
          <FontAwesomeIcon className="icon" icon={getIcon(item)} />
        </Link>

        <Tooltip anchorSelect={`#${item}`}>
            <p>{item}</p>
        </Tooltip>
        </div>
      ))}
      <button
        onClick={logOff}
        id="logoff"
        className="text-decoration-none nav-btn btn btn-link"
      >
        Logoff
      </button>
      <Tooltip anchorSelect="#logoff">
        <p>Are you certain you want to log off?</p>
      </Tooltip>
    </div>
  );
}

export default RigDashboardNavbar;
