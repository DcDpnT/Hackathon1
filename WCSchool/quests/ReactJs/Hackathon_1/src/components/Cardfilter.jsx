import { useEffect,useState } from "react"
import {useParams} from "react-router-dom"
import {Link} from "react-router-dom"
import Card from "../components/Card";


import "./Cardfilter.css";

const Card = (props) => {
  const { name, image } = props;
  return (
    <div className="cardGlobal">
      <img className="cardImg" src={image} alt={people.name} />
      <p>{name}</p>
    </div>
  );
};

export default Card;