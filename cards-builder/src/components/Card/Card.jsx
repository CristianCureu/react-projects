import "./card.css";
import { motion } from "framer-motion";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import ProgressBar from "../ProgressBar/ProgressBar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function Card({ stats, deleteCard, id, url }) {
  const [isOpen, setIsOpen] = useState(false);
  const [hovered, setHovered] = useState(false);

  const checkStatus = (key, value) => {
    if (key === "skillMoves" || key === "weakFoot") {
      return <Rating name="read-only" value={parseInt(value)} readOnly />;
    } else if (key === "position" || key === "foot") {
      return value;
    } else {
      return <ProgressBar completed={value} />;
    }
  };

  return (
    <motion.div
      transition={{ layout: { duration: 0.7, type: "tween" } }}
      layout
      className={isOpen ? "card opened" : "card"}
      onClick={() => setIsOpen(!isOpen)}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "8px",
        boxShadow: "0px 0px 30px rgba(0, 0, 0, 0.7)",
      }}
    >
      <motion.div
        transition={{ layout: { duration: 0.7, type: "tween" } }}
        layout
        className="image"
      >
        <img
          style={{ borderRadius: "8px" }}
          src={url}
          alt="player"
        />
        <div className={hovered ? "delete" : "none delete"}>
          <IconButton onClick={() => deleteCard(id)}>
            <DeleteIcon />
          </IconButton>
        </div>
      </motion.div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.7 }}
          className="info"
        >
          <div className="features">
            <h2 className="title">Player stats</h2>
            {stats.map((status, index) => (
              <motion.div key={index}>
                {status[0] !== "photoUrl" && (
                  <div className="label">{status[0]}</div>
                )}
                {status[0] !== "photoUrl" && checkStatus(status[0], status[1])}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Card;
