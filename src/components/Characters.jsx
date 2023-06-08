import { useState } from "react";
import { useEffect} from "react";
import './Characters.css'

const Cards = (Props) => {

return(
    <div className="GlobalCard">
        <img src={Props.clef.img} alt={Props.clef.Name} />
        <h1 style= {{color:Props.clef.color}}> {Props.clef.Name}</h1>
        <p>{Props.clef.descrip}</p>
    </div>
)}

const Characters =() => {

    useEffect(() =>{
        fetch("https://miadil.github.io/starwars-api/api")
          .then((res) => res.json())
          .then((res) => console.log(res));

    }, [])
}


export default Characters;