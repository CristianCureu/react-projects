import "./builder.css";
import { useEffect, useState } from "react";
import { TextField } from "@mui/material";


function CardBuilder() {
  const [stats, setStats] = useState({
    position: "",
    pace: 0,
    shooting: 0,
    passing: 0,
    dribbling: 0,
    defending: 0,
    physical: 0,
    skillMoves: 0,
    weakFoot: 0,
    foot: "",
  });

  useEffect(() => {
    console.log(stats);
  }, [stats]);

  return (
      <form className="formBuilder">
        <div className="strings">
          <TextField label="position" />
          <TextField label="foot" />
        </div>
        <div className="bars">
          <TextField variant="standard" type="number" label="pace" />
          <TextField variant="standard" type="number" label="shooting" />
          <TextField variant="standard" type="number" label="passing" />
          <TextField variant="standard" type="number" label="dribbling" />
          <TextField variant="standard" type="number" label="defending" />
          <TextField variant="standard" type="number" label="physical" />
          <TextField variant="standard" type="number" label="skillMoves" />
          <TextField variant="standard" type="number" label="weakFoot" />
        </div>
      </form>
  );
}

export default CardBuilder;
