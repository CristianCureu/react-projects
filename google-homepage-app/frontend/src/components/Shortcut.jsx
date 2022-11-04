import AddIcon from "@mui/icons-material/Add";

function Shortcut() {
  return (
    <div className="shortcut">
      <div className="shortcut icon">
        <AddIcon sx={{ color: "white", transform: "scale(1.3)" }} />
      </div>
      <div className="shortcut title">Add Shortcut</div>
    </div>
  );
}

export default Shortcut;
