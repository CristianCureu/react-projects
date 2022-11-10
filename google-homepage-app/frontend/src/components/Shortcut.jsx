import MoreVertIcon from "@mui/icons-material/MoreVert";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

function Shortcut({ name, url }) {
  const [isHovering, setIsHovering] = useState(false);
  const [moreActionOpen, setMoreActionOpen] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };
  const handleMouseOut = () => {
    setIsHovering(false);
  };

  const handleMoreAction = () => {
    if (moreActionOpen) {
      setMoreActionOpen(false);
    } else {
      setMoreActionOpen(true);
    }
  };
  return (
    <div
      className="shortcut"
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      <div className="shortcut icon">
        <div className="shortcut-logo">{name.charAt(0).toUpperCase()}</div>
      </div>
      <div className="shortcut title">{name}</div>
      <div className={isHovering ? "shortcut-more op1" : "shortcut-more"}>
        {moreActionOpen ? (
          <CloseIcon
            sx={{ transform: "scale(0.8)", color: "#606060" }}
            onClick={handleMoreAction}
          />
        ) : (
          <MoreVertIcon
            sx={{ transform: "scale(0.8)", color: "#606060" }}
            onClick={handleMoreAction}
          />
        )}
      </div>
      <div className={moreActionOpen ? "shortcut-hidden-box" : "none"}>
        <div className="shortcut-option">Edit shortcut</div>
        <div className="shortcut-option">Remove</div>
      </div>
    </div>
  );
}

export default Shortcut;
