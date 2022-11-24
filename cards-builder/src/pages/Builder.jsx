import { useLocation } from "react-router-dom";
import CardBuilder from "../components/CardBuilder/CardBuilder";
import ToggleButton from "../components/ToggleButton/ToggleButton";

function Builder() {
  const location = useLocation();
  return (
    <div className="builder">
      <CardBuilder />
      <ToggleButton location={location.pathname} />
    </div>
  );
}

export default Builder;
