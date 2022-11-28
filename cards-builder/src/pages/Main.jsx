import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import ToggleButton from "../components/ToggleButton/ToggleButton";
import CircularProgress from "@mui/material/CircularProgress";
import Card from "../components/Card/Card";
import "./pages.css";

function Main() {
  const location = useLocation();
  const [cards, setCards] = useState([]);

  const deleteCard = async (id) => {
    const oldCards = [...cards];
    try {
      const response = await fetch(
        `https://637f53c72f8f56e28e8829ca.mockapi.io/cards/${id}`,
        {
          method: "DELETE",
        }
      );
      const data = await response.json();
      setCards(oldCards.filter((el) => el.id !== data.id));
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const getCards = async () => {
      try {
        const response = await fetch(
          "https://637f53c72f8f56e28e8829ca.mockapi.io/cards"
        );
        const data = await response.json();
        console.log(data);
        setCards(data);
      } catch (err) {
        console.log(err);
      }
    };
    getCards();
  }, []);

  return (
    <div className="main">
      {cards.length ? (
        cards.map((card) => (
          <Card
            key={card.id}
            stats={Object.entries(card).filter((card) => card[0] !== "id")}
            id={card.id}
            url={card.photoUrl}
            deleteCard={deleteCard}
          />
        ))
      ) : (
        <CircularProgress />
      )}
      <ToggleButton location={location.pathname} />
    </div>
  );
}

export default Main;
