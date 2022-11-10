import { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  height: 400,
  bgcolor: "#303030",
  color: "white",
  boxShadow: 24,
  p: 4,
};

function AddShortcut({ addShortcut }) {
  const [shortcut, setShortcut] = useState({});
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setShortcut({});
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addShortcut(shortcut);
    handleClose();
  };

  return (
    <div className="shortcut">
      <div className="shortcut icon addshortcut" onClick={handleOpen}>
        <AddIcon sx={{ color: "white", transform: "scale(1.3)" }} />
      </div>
      <div className="shortcut title">Add shortcut</div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <form className="shortcut-modal" onSubmit={handleSubmit}>
            <p>Add shortcut</p>
            <TextField
              id="filled-basic"
              variant="filled"
              label="Name"
              sx={{ backgroundColor: "#232323" }}
              onChange={(e) =>
                setShortcut({ ...shortcut, name: e.target.value })
              }
            />
            <TextField
              variant="filled"
              label="URL"
              sx={{ backgroundColor: "#232323" }}
              onChange={(e) =>
                setShortcut({ ...shortcut, url: e.target.value })
              }
            />
            <div className="shortcut-buttons">
              <Button variant="outlined" onClick={handleClose}>
                Cancel
              </Button>
              <Button
                variant="outlined"
                disabled={!(shortcut.name && shortcut.url)}
                type="submit"
              >
                Done
              </Button>
            </div>
          </form>
        </Box>
      </Modal>
    </div>
  );
}

export default AddShortcut;
