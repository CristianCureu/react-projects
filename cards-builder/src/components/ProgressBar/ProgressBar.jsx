import { useEffect, useState } from "react";

function ProgressBar({ completed }) {
  const [progress, setProgress] = useState(0);

  const conatiner = {
    width: "100%",
    height: "1.5rem",
    borderRadius: "4px",
    backgroundColor: "#e085ff",
    overflow: "hidden",
    position: "relative",
  };
  const fillerStyles = {
    width: `${progress}%`,
    height: "100%",
    backgroundColor: "#c61cff",
    transition: "width 0.7s ease-in-out",
  };
  const labelStyles = {
    color: "white",
    fontWeight: "bold",
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(0%, -50%)",
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, completed);
      });
    }, 70);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div style={conatiner}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${parseInt(progress)}`}</span>
      </div>
    </div>
  );
}

export default ProgressBar;
