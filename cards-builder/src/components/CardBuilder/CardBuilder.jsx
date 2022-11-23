import "./builder.css";
import { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

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

  const submitHandler = (e) => {
    e.preventDefault();
  }

  return (
    <form className="formBuilder" onSubmit={submitHandler}>
      <div className="bars-left">
        <TextField
          variant="filled"
          label="position"
          onChange={(e) => setStats({ ...stats, position: e.target.value })}
        />
        <TextField
          variant="filled"
          label="foot"
          onChange={(e) => setStats({ ...stats, foot: e.target.value })}
        />
        <TextField
          variant="filled"
          type="number"
          label="pace"
          onChange={(e) => setStats({ ...stats, pace: e.target.value })}
        />
        <TextField
          variant="filled"
          type="number"
          label="shooting"
          onChange={(e) => setStats({ ...stats, shooting: e.target.value })}
        />
        <TextField
          variant="filled"
          type="number"
          label="passing"
          onChange={(e) => setStats({ ...stats, passing: e.target.value })}
        />
      </div>
      <div className="bars-right">
        <TextField
          variant="filled"
          type="number"
          label="dribbling"
          onChange={(e) => setStats({ ...stats, dribbling: e.target.value })}
        />
        <TextField
          variant="filled"
          type="number"
          label="defending"
          onChange={(e) => setStats({ ...stats, defending: e.target.value })}
        />
        <TextField
          variant="filled"
          type="number"
          label="physical"
          onChange={(e) => setStats({ ...stats, physical: e.target.value })}
        />
        <TextField
          variant="filled"
          type="number"
          label="skillMoves"
          onChange={(e) => setStats({ ...stats, skillMoves: e.target.value })}
        />
        <TextField
          variant="filled"
          type="number"
          label="weakFoot"
          onChange={(e) => setStats({ ...stats, weakFoot: e.target.value })}
        />
      </div>
      <Button variant="outlined" className="submit">Create card</Button>
    </form>
  );
}

export default CardBuilder;
