import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import RefreshIcon from "@mui/icons-material/Refresh";
import ShareIcon from "@mui/icons-material/Share";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./components.css";

function TopBar() {
  return (
    <div className="topbar">
      <div className="topbar-left-buttons">
        <IconButton>
          <ArrowBackIcon />
        </IconButton>
        <IconButton>
          <ArrowForwardIcon />
        </IconButton>
        <IconButton onClick={() => window.location.reload()}>
          <RefreshIcon />
        </IconButton>
      </div>
      <div className="topbar-input">
        <div className="topbar-info-button">
          <IconButton>
            <InfoOutlinedIcon />
          </IconButton>
        </div>
        <input />

        <div className="topbar-input-buttons">
          <IconButton className="button">
            <ShareIcon />
          </IconButton>
          <IconButton className="button">
            <StarOutlineIcon />
          </IconButton>
        </div>
      </div>
      <div className="topbar-right-buttons">
        <IconButton className="button">
          <AccountCircleRoundedIcon />
        </IconButton>
        <IconButton className="button">
          <MoreVertIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default TopBar;
