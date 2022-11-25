import "./card.css";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import Rating from "@mui/material/Rating";
import ProgressBar from "../ProgressBar/ProgressBar";

function Card({ stats }) {
  const [isOpen, setIsOpen] = useState(false);

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
        <img style={{ borderRadius: "8px" }} src="images/me.jpg" alt="me" />
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
                <div className="label">{status[0]}</div>
                {checkStatus(status[0], status[1])}
              </motion.div>
            ))}
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Card;
