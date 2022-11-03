import Shortcuts from "../components/Shortcuts";
import TopBar from "../components/TopBar";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <TopBar />
      <div className="home-container">
        <Shortcuts />
      </div>
    </div>
  );
}

export default Home;
