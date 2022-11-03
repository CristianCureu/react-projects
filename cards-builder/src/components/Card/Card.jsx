import "./card.css";
import { motion } from "framer-motion";
import { useState } from "react";
import LinearProgress from "@mui/material/LinearProgress";

function Card() {
  const [isOpen, setIsOpen] = useState(false);
  const [paceValue, setPaceValue] = useState(0);

  //layout by default animates the size of it and the position of it
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
            <motion.div>
              <div className="label">Position</div>
            </motion.div>
            <motion.div>
              <div className="label">Pace</div>
              <LinearProgress
                value={paceValue}
                variant="determinate"
                color="secondary"
                sx={{ width: "8rem", height: ".8rem" }}
              />
            </motion.div>
            <motion.div>
              <div className="label">Shooting</div>
              <LinearProgress
                value={10}
                variant="determinate"
                color="secondary"
                sx={{ width: "8rem", height: ".8rem" }}
              />
            </motion.div>
            <motion.div>
              <div className="label">Passing</div>
              <LinearProgress
                value={10}
                variant="determinate"
                color="secondary"
                sx={{ width: "8rem", height: ".8rem" }}
              />
            </motion.div>
            <motion.div>
              <div className="label">Dribbling</div>
              <LinearProgress
                value={10}
                variant="determinate"
                color="secondary"
                sx={{ width: "8rem", height: ".8rem" }}
              />
            </motion.div>
            <motion.div>
              <div className="label">Defending</div>
              <LinearProgress
                value={10}
                variant="determinate"
                color="secondary"
                sx={{ width: "8rem", height: ".8rem" }}
              />
            </motion.div>
            <motion.div>
              <div className="label">Physical</div>
              <LinearProgress
                value={10}
                variant="determinate"
                color="secondary"
                sx={{ width: "8rem", height: ".8rem" }}
              />
            </motion.div>
            <motion.div>
              <div className="label">Skill moves</div>
              <LinearProgress
                value={10}
                variant="determinate"
                color="secondary"
                sx={{ width: "8rem", height: ".8rem" }}
              />
            </motion.div>
            <motion.div>
              <div className="label">Weak foot</div>
              <LinearProgress
                value={10}
                variant="determinate"
                color="secondary"
                sx={{ width: "8rem", height: ".8rem" }}
              />
            </motion.div>
            <motion.div>
              <div className="label">Foot</div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

export default Card;
