import { useState } from "react";
import { useEffect } from "react";
import "./components.css";
import Shortcut from "./Shortcut";

function Shortcuts() {
  const [shortcuts, setShortcuts] = useState([]);

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
    console.log("...")
  }, []);

  return (
    <div className="shortcuts">
      {shortcuts.length &&
        shortcuts.map((shortcut, index) => (
          <Shortcut
            key={index}
            name={shortcut.name}
            url={shortcut.url}
          />
        ))}
      <Shortcut />
    </div>
  );
}

export default Shortcuts;
