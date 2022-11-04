import Input from "../components/Input";
import Shortcuts from "../components/Shortcuts";
import TopBar from "../components/TopBar";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <TopBar />
      <div className="home-container">
        <img src="images/google.png" />
        <Input />
        <Shortcuts />
      </div>
    </div>
  );
}

export default Home;
