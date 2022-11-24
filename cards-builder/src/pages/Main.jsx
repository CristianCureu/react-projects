import { useLocation } from "react-router-dom";
import Card from "../components/Card/Card";
import ToggleButton from "../components/ToggleButton/ToggleButton";
import "./pages.css";

function Main() {
  const location = useLocation();
  return (
    <div className="main">
      <Card />
      <ToggleButton location={location.pathname} />
    </div>
  );
}

export default Main;
