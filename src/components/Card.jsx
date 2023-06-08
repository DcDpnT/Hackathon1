import { useState } from "react";
import './Card.css'

const Card = (Props) => {
const {name , image, height, mass} = Props;
    return(
        <div className="CartBox">
            <img className="CartimgBox" src={image} alt={name} />
        </div>
       
        <div>
          <h1 className="CartTitleBox" > {name}</h1>
          <p className="CartheightBox">{height}</p>
          <p className="CartmassBox">{mass}</p>
        </div>
)}

export default Card;