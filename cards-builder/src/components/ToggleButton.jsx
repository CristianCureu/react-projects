import { Link, Navigate , useLocation} from "react-router-dom";
import ConstructionIcon from "@mui/icons-material/Construction";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function ToggleButton({ pageName }) {
    const location = useLocation();
    console.log(location.pathname)
  return (
    <div className="toBuilder">
      {pageName === "/builder" ? (
        <Link to="/builder">
          <ConstructionIcon />
        </Link>
      ) : (
        <Link to="/">
            <ArrowBackIcon />
        </Link>
      )}
    </div>
  );
}

export default ToggleButton;
