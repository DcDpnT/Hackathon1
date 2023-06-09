import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Card from "../components/Card";

const Characters = () => {
  const [peoples, setPeoples] = useState([]);

  useEffect(() => {
    fetch("https://miadil.github.io/starwars-api/api/all.json")
      .then((res) => res.json())
      .then((res) => console.log(res) || setPeoples(res));
  }, []);

  return (
    <>
      {peoples.map((people) => {
        return (
          <Link to={`/characters/${people.id}`}>
            <Card name={people.name} image={people.image} height={people.height} mass={people.mass} key={people.id} />
          </Link>
        );
      })}
      <p> ICI Characters </p>
    </>
  );
};

export default Characters;