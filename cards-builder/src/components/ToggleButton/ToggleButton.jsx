import IconButton from "@mui/material/IconButton";
import ConstructionIcon from "@mui/icons-material/Construction";
import HomeIcon from "@mui/icons-material/Home";
import "./toggle.css";
import { Link } from "react-router-dom";

function ToggleButton({ location }) {
  return (
    <div className="toggle">
      <IconButton>
        {location === "/" ? (
          <Link to="/builder">
            <ConstructionIcon sx={{ transform: "scale(1.3)" }} />
          </Link>
        ) : (
          <Link to="/" >
            <HomeIcon sx={{ transform: "scale(1.3)" }} />
          </Link>
        )}
      </IconButton>
    </div>
  );
}

export default ToggleButton;
