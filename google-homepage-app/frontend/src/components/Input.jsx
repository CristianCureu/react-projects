import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";
import MicIcon from "@mui/icons-material/Mic";
import "./components.css";

function Input() {
  return (
    <div className="center-input">
      <IconButton>
        <SearchIcon />
      </IconButton>
      <input />
      <IconButton>
        <MicIcon />
      </IconButton>
    </div>
  );
}

export default Input;
