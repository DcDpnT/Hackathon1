import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./CardFilter.css"

const CardFilter = () => {
  const [cards, setCards] = useState([]);
  const [fiteredCardsState, setFiteredCardsState] = useState([]);

  // const { id } = useParams();
  
  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((res) => res.json())
      .then((res) => {
        setFiteredCardsState(res)
        setCards(res)
      } );
  }, []);
  
  const filterMale = () => {
    const filteredCards = cards.filter((card) => card.gender ==="male") ;
    setFiteredCardsState(filteredCards);
  };

  const filterFemale = () => {
    const filteredCards = cards.filter((card) => card.gender ==="female") ;
    setFiteredCardsState(filteredCards);
  };
  const resetFilter = () => {
    setFiteredCardsState(cards);
  }
  
   return (

   <>   
        <button className="filter" onClick={filterFemale}>Filter Female</button>
        <button className="filter" onClick={filterMale}>Filter Male</button>
        <button className="filter" onClick={resetFilter}>reset</button>
          {fiteredCardsState.map((card) => (
          <div key={card.id}>
            <img src={card.image} alt={card.name} />
            <p>{card.name}</p>
            <button className="link">
            <Link to={`./characters/${card.id}`}>View Profile</Link>
            </button>
          </div>
          ))}

    </>
  );  
};


export default CardFilter ;