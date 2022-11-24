import "./builder.css";
import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const arrayStats = [
  "position",
  "pace",
  "shooting",
  "passing",
  "dribbling",
  "defending",
  "physical",
  "skillMoves",
  "weakFoot",
  "foot",
  "photoUrl",
];

function CardBuilder() {
  const [stats, setStats] = useState({});

  const onChangeHandler = (label, e) => {
    setStats({ ...stats, [label]: e.target.value.toUpperCase() });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      if (Object.keys(stats).length === arrayStats.length) {
        await fetch("https://637f53c72f8f56e28e8829ca.mockapi.io/cards", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(stats),
        });
        toast.success("Card successfully created!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
        setStats({});
        e.target.reset();
      } else {
        toast.error("All fields are mandatory!", {
          position: toast.POSITION.BOTTOM_RIGHT,
        });
      }
    } catch (err) {
      toast.error(err.message, {
        position: toast.POSITION.BOTTOM_RIGHT,
      });
    }
  };

  useEffect(() => {
    console.log(stats);
  }, [stats]);

  return (
    <form className="formBuilder" onSubmit={submitHandler}>
      <div className="fields">
        {Array(arrayStats.length)
          .fill(true)
          .map((_, i) => (
            <TextField
              key={i}
              variant="filled"
              label={arrayStats[i]}
              type={
                arrayStats[i] === "position" ||
                arrayStats[i] === "foot" ||
                arrayStats[i] === "photoUrl"
                  ? "text"
                  : "number"
              }
              onChange={(e) => onChangeHandler(arrayStats[i], e)}
            />
          ))}
      </div>
      <div className="submit">
        <Button variant="outlined" type="submit">
          Create card
        </Button>
      </div>
      <ToastContainer />
    </form>
  );
}

export default CardBuilder;
