import { useState, useEffect } from "react";
import AddShortcut from "./AddShortcut";
import { createShortcut } from "../requests";
import "./components.css";
import Shortcut from "./Shortcut";

function Shortcuts() {
  const [shortcuts, setShortcuts] = useState([]);

  const addShortcut = async (newShortcut) => {
    const oldShortcuts = [...shortcuts];
    try {
      const resData = await createShortcut(newShortcut);
      oldShortcuts.push(resData);
      setShortcuts(oldShortcuts);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("http://localhost:3300/shortcut");
        const response = await res.json();
        setShortcuts(response.data);
      } catch (err) {
        console.log(err);
      }
    };
    getData();
  }, []);

  return (
    <div className="shortcuts">
      {shortcuts &&
        shortcuts.map((shortcut) => (
          <Shortcut key={shortcut._id} name={shortcut.name} />
        ))}
      <AddShortcut addShortcut={addShortcut} />
    </div>
  );
}

export default Shortcuts;
